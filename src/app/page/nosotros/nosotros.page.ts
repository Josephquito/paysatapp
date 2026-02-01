import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';
import { ChatUiService } from '../../shared/chat-widget/chat-ui.service';

@Component({
  standalone: true,
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.css'],
  imports: [RouterModule, ContactFormComponent],
})
export class NosotrosPage {
  constructor(private chatUi: ChatUiService) {}

  openChat(): void {
    this.chatUi.open();
  }
}
