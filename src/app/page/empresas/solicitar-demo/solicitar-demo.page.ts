import { Component } from '@angular/core';
import { ContactFormComponent } from '../../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-solicitar-demo',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './solicitar-demo.page.html',
  styleUrl: './solicitar-demo.page.css',
})
export class SolicitarDemoPage {}
