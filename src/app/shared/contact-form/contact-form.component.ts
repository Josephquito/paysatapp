import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service'; // ajusta la ruta si tu estructura cambia
import { environment } from '../../../environments/environment'; // ajusta si tu path es diferente

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  @Input() title = 'Contáctanos';
  @Input() subtitle = 'Envíanos tu consulta y te responderemos lo antes posible.';

  form!: FormGroup;

  // ✅ estados (solo agrego)
  loading = false;
  successId: string | null = null;
  errorMsg: string | null = null;

  // (opcional) por si quieres ver a dónde apunta
  apiUrl = environment.formApiUrl;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submit(): void {
    // ✅ limpio estados antes de enviar
    this.successId = null;
    this.errorMsg = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    // ✅ envío al backend usando el service
    this.contactService.send(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.loading = false;

        if (res?.ok) {
          this.successId = res.id ?? 'ok';
          this.form.reset();
        } else {
          this.errorMsg = res?.error ?? 'No se pudo enviar el mensaje';
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.error || err?.message || 'Error de servidor';
      },
    });
  }

  hasError(controlName: string, error: string): boolean {
    const c = this.form.get(controlName);
    return !!c && c.touched && c.hasError(error);
  }
}
