import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  NgZone,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatWidgetService } from '../../services/chat-widget.service';
import { ChatUiService } from './chat-ui.service';

import { BehaviorSubject, Subject, merge, of, defer, from, Observable } from 'rxjs';
import {
  catchError,
  concatMap,
  filter,
  map,
  scan,
  shareReplay,
  startWith,
  takeUntil,
  withLatestFrom,
  tap,
  distinctUntilChanged,
} from 'rxjs/operators';

type Msg = { from: 'user' | 'bot'; text: string; ts?: number };

type Action =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'TOGGLE' }
  | { type: 'DRAFT_CHANGED'; draft: string }
  | { type: 'SEND_REQUESTED'; text: string }
  | { type: 'BOT_SUCCESS'; reply: string }
  | { type: 'BOT_ERROR' };

type State = {
  isOpen: boolean;
  unread: number;
  draft: string;
  messages: Msg[];
  loading: boolean;
  error?: string | null;
};

type Vm = {
  isOpen: boolean;
  unread: number;

  draft: string;
  canSend: boolean;

  messages: Msg[];
  loading: boolean;
  showEmpty: boolean;

  error?: string | null;
};

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
})
export class ChatWidgetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollRef') scrollRef?: ElementRef<HTMLDivElement>;

  private readonly destroy$ = new Subject<void>();

  // UI intents
  private readonly open$ = new Subject<void>();
  private readonly close$ = new Subject<void>();
  private readonly toggle$ = new Subject<void>();

  // composer
  private readonly draft$ = new BehaviorSubject<string>('');
  private readonly sendClick$ = new Subject<void>();

  readonly vm$: Observable<Vm>;

  constructor(
    private readonly chatService: ChatWidgetService,
    private readonly chatUi: ChatUiService,
    private readonly ngZone: NgZone,
  ) {
    // ---- UI actions ----
    const uiActions$ = merge(
      this.open$.pipe(map((): Action => ({ type: 'OPEN' }))),
      this.close$.pipe(map((): Action => ({ type: 'CLOSE' }))),
      this.toggle$.pipe(map((): Action => ({ type: 'TOGGLE' }))),
      this.draft$.pipe(map((draft): Action => ({ type: 'DRAFT_CHANGED', draft }))),
    );

    // ---- Send pipeline (defer + from, startWith, catchError) ----
    const sendActions$ = this.sendClick$.pipe(
      withLatestFrom(this.draft$),
      map(([, draft]) => draft.trim()),
      filter((text) => text.length > 0),
      concatMap((text) =>
        defer(() => from(this.chatService.sendMessage(text))).pipe(
          map((res: any): Action => ({ type: 'BOT_SUCCESS', reply: res.reply })),
          catchError(() => of<Action>({ type: 'BOT_ERROR' })),
          startWith<Action>({ type: 'SEND_REQUESTED', text }),
        ),
      ),
    );

    const actions$ = merge(uiActions$, sendActions$);

    const initialState: State = {
      isOpen: false,
      unread: 0,
      draft: '',
      messages: [],
      loading: false,
      error: null,
    };

    const state$ = actions$.pipe(
      scan((state: State, action: Action): State => {
        switch (action.type) {
          case 'OPEN':
            return { ...state, isOpen: true, unread: 0 };

          case 'CLOSE':
            return { ...state, isOpen: false };

          case 'TOGGLE': {
            const nextOpen = !state.isOpen;
            return { ...state, isOpen: nextOpen, unread: nextOpen ? 0 : state.unread };
          }

          case 'DRAFT_CHANGED':
            return { ...state, draft: action.draft };

          case 'SEND_REQUESTED': {
            const userMsg: Msg = { from: 'user', text: action.text, ts: Date.now() };
            return {
              ...state,
              draft: '',
              messages: [...state.messages, userMsg],
              loading: true,
              error: null,
            };
          }

          case 'BOT_SUCCESS': {
            const botMsg: Msg = { from: 'bot', text: action.reply, ts: Date.now() };
            return { ...state, messages: [...state.messages, botMsg], loading: false, error: null };
          }

          case 'BOT_ERROR': {
            const botMsg: Msg = {
              from: 'bot',
              text: 'Error al contactar con el servidor',
              ts: Date.now(),
            };
            return {
              ...state,
              messages: [...state.messages, botMsg],
              loading: false,
              error: 'SERVER_ERROR',
            };
          }

          default:
            return state;
        }
      }, initialState),
      shareReplay(1),
    );

    // ---- VM (solo propiedades, nada de funciones en template) ----
    this.vm$ = state$.pipe(
      map((s): Vm => {
        const canSend = s.draft.trim().length > 0 && !s.loading;
        return {
          isOpen: s.isOpen,
          unread: s.unread,
          draft: s.draft,
          canSend,
          messages: s.messages,
          loading: s.loading,
          showEmpty: s.messages.length === 0 && !s.loading,
          error: s.error ?? null,
        };
      }),
      shareReplay(1),
    );

    // ---- Scroll side-effect (FUERA del reducer para evitar loop) ----
    state$
      .pipe(
        map((s) => ({ isOpen: s.isOpen, len: s.messages.length, loading: s.loading })),
        distinctUntilChanged(
          (a, b) => a.isOpen === b.isOpen && a.len === b.len && a.loading === b.loading,
        ),
        filter((x) => x.isOpen),
        tap(() => this.scrollToBottomNextFrame()),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.chatUi.register(this);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ===== Public API =====

  open(): void {
    this.open$.next();
  }

  close(): void {
    this.close$.next();
  }

  toggle(): void {
    this.toggle$.next();
  }

  // ===== Composer =====

  onDraftChange(value: string): void {
    this.draft$.next(value);
  }

  send(): void {
    this.sendClick$.next();
    this.resetComposer();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.close();
  }

  // ===== Scroll (sin setTimeout) =====

  private scrollToBottomNextFrame(): void {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        const el = this.scrollRef?.nativeElement;
        if (!el) return;
        el.scrollTop = el.scrollHeight;
      });
    });
  }

  private lastTextArea?: HTMLTextAreaElement;

  autoGrow(el: HTMLTextAreaElement): void {
    this.lastTextArea = el;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 100) + 'px';
  }

  private resetComposer(): void {
    if (!this.lastTextArea) return;
    this.lastTextArea.style.height = 'auto';
    this.lastTextArea.scrollTop = 0;
  }

  onEnter(e: Event, el: HTMLTextAreaElement): void {
    const event = e as KeyboardEvent;
    if (event.shiftKey) return;
    event.preventDefault();
    this.lastTextArea = el;
    this.send();
  }
}
