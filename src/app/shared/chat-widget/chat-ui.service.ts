import { Injectable } from '@angular/core';
import { ChatWidgetComponent } from './chat-widget.component';

@Injectable({ providedIn: 'root' })
export class ChatUiService {
  private widget?: ChatWidgetComponent;

  register(widget: ChatWidgetComponent): void {
    this.widget = widget;
  }

  open(): void {
    this.widget?.open();
  }

  close(): void {
    this.widget?.close();
  }

  toggle(): void {
    this.widget?.toggle();
  }
}
