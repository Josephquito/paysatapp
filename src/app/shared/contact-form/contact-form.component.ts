import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  @Input() title = 'Contáctanos';
  @Input() subtitle = 'Envíanos tu consulta y te responderemos lo antes posible.';

  form!: FormGroup;

  loading = false;
  successId: string | null = null;
  errorMsg: string | null = null;

  apiUrl = environment.formApiUrl;

  private sub = new Subscription();

  // ✅ Regex de "permitidos" por campo (para Validators.pattern)
  private readonly allowed = {
    // letras (incluye tildes), espacio, punto, guion, apóstrofe
    name: /^[a-zA-ZÀ-ÿÑñ' .-]{2,60}$/,
    lastName: /^[a-zA-ZÀ-ÿÑñ' .-]{2,60}$/,

    // email "básico seguro" + además Validators.email
    email: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,

    // números + + - ( ) espacios
    phone: /^[0-9+\-() ]{7,25}$/,

    // mensaje: letras/números + espacios + puntuación permitida
    // (sin < > { } [ ] ( ) etc.)
    message: /^[a-zA-Z0-9À-ÿÑñ\s.,;:!?@/_\-]{10,800}$/,
  };

  // ✅ Sanitizadores (eliminan caracteres NO permitidos)
  private readonly sanitize = {
    name: (v: string) => v.replace(/[^a-zA-ZÀ-ÿÑñ' .-]/g, ''),
    lastName: (v: string) => v.replace(/[^a-zA-ZÀ-ÿÑñ' .-]/g, ''),
    email: (v: string) => v.replace(/[^a-zA-Z0-9._%+\-@]/g, ''),
    phone: (v: string) => v.replace(/[^0-9+\-() ]/g, ''),
    message: (v: string) => v.replace(/[^a-zA-Z0-9À-ÿÑñ\s.,;:!?@/_\-]/g, ''),
  };

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(60),
          Validators.pattern(this.allowed.name),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(60),
          Validators.pattern(this.allowed.lastName),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(120),
          Validators.pattern(this.allowed.email),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(25),
          Validators.pattern(this.allowed.phone),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(800),
          Validators.pattern(this.allowed.message),
        ],
      ],
    });

    // ✅ Sanitización en caliente (teclado/pegado/autofill)
    (Object.keys(this.sanitize) as Array<keyof typeof this.sanitize>).forEach((key) => {
      const ctrl = this.form.get(key as string);
      if (!ctrl) return;

      this.sub.add(
        ctrl.valueChanges.subscribe((raw) => {
          const v = String(raw ?? '');

          // Tip: email sin espacios
          const cleaned =
            key === 'email' ? this.sanitize[key](v).replace(/\s+/g, '') : this.sanitize[key](v);

          if (cleaned !== v) {
            ctrl.setValue(cleaned, { emitEvent: false });
          }
        }),
      );
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  submit(): void {
    this.successId = null;
    this.errorMsg = null;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMsg = 'Revisa los campos. Hay datos inválidos o caracteres no permitidos.';
      return;
    }

    this.loading = true;

    // ✅ Normaliza un poco antes de enviar
    const payload = {
      ...this.form.getRawValue(),
      name: String(this.form.value.name ?? '').trim(),
      lastName: String(this.form.value.lastName ?? '').trim(),
      email: String(this.form.value.email ?? '').trim(),
      phone: String(this.form.value.phone ?? '').trim(),
      message: String(this.form.value.message ?? '').trim(),
    };

    this.contactService.send(payload).subscribe({
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

  // =========================
  // ✅ BLOQUEO DE TECLAS/PEGADO
  // =========================

  blockInvalidKey(e: KeyboardEvent, field: keyof typeof this.allowed) {
    // permite control keys
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const allowedControl = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Tab',
      'Enter',
      'Home',
      'End',
    ];
    if (allowedControl.includes(e.key)) return;

    // si no es un caracter (ej: F5), no bloquees
    if (!e.key || e.key.length !== 1) return;

    const perChar = this.perCharRegex(field);
    if (!perChar.test(e.key)) e.preventDefault();
  }

  blockInvalidPaste(e: ClipboardEvent, field: keyof typeof this.allowed) {
    const text = e.clipboardData?.getData('text') ?? '';
    const cleaned =
      field === 'email'
        ? this.sanitize[field](text).replace(/\s+/g, '')
        : this.sanitize[field](text);

    if (cleaned !== text) {
      e.preventDefault();
    }
  }

  private perCharRegex(field: keyof typeof this.allowed): RegExp {
    switch (field) {
      case 'name':
      case 'lastName':
        return /^[a-zA-ZÀ-ÿÑñ' .-]$/;
      case 'email':
        return /^[a-zA-Z0-9._%+\-@]$/;
      case 'phone':
        return /^[0-9+\-() ]$/;
      case 'message':
        return /^[a-zA-Z0-9À-ÿÑñ\s.,;:!?@/_\-]$/;
    }
  }
}
