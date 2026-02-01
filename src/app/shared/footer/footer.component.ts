import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChatWidgetComponent } from '../chat-widget/chat-widget.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
