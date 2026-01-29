import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatWidgetService } from '../../services/chat-widget.service';

type Msg = { from: 'user' | 'bot'; text: string; ts?: number };

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
})
export class ChatWidgetComponent {
  isOpen = false;
  message = '';
  messages: Msg[] = [];
  loading = false;

  unread = 0;

  @ViewChild('scrollRef') scrollRef?: ElementRef<HTMLDivElement>;

  constructor(private chatService: ChatWidgetService) {}

  open() {
    this.isOpen = true;
    this.unread = 0;
    setTimeout(() => this.scrollToBottom(), 0);
  }

  close() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  send() {
    if (!this.message.trim()) return;

    const userMessage = this.message.trim();
    this.messages.push({ from: 'user', text: userMessage, ts: Date.now() });

    this.message = '';
    this.loading = true;

    this.resetComposer(); // ✅ vuelve a tamaño normal al enviar

    this.scrollToBottom();

    this.chatService.sendMessage(userMessage).subscribe({
      next: (res) => {
        this.messages.push({ from: 'bot', text: res.reply, ts: Date.now() });
        this.loading = false;
        this.scrollToBottom();
      },
      error: () => {
        this.messages.push({
          from: 'bot',
          text: 'Error al contactar con el servidor',
          ts: Date.now(),
        });
        this.loading = false;
        this.scrollToBottom();
      },
    });
  }

  private scrollToBottom() {
    const el = this.scrollRef?.nativeElement;
    if (!el) return;
    setTimeout(() => (el.scrollTop = el.scrollHeight), 0);
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.isOpen) this.close();
  }

  private lastTextArea?: HTMLTextAreaElement;

  autoGrow(el: HTMLTextAreaElement) {
    this.lastTextArea = el;

    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 100) + 'px';
  }

  private resetComposer() {
    if (!this.lastTextArea) return;
    this.lastTextArea.style.height = 'auto';
    this.lastTextArea.scrollTop = 0;
  }

  onEnter(e: Event, el: HTMLTextAreaElement) {
    const event = e as KeyboardEvent;

    if (event.shiftKey) return; // Shift+Enter => nueva línea
    event.preventDefault(); // Enter => enviar

    this.lastTextArea = el; // guarda referencia
    this.send(); // send ya resetea
  }
}
