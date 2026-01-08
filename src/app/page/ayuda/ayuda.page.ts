import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type FaqMedia =
  | { type: 'video-file'; src: string; poster?: string; title?: string }
  | { type: 'video-embed'; src: string; title?: string }
  | { type: 'image'; src: string; title?: string };

interface FaqStep {
  title: string;
  subtitle: string;
}

interface FaqItem {
  question: string;
  steps: FaqStep[];
  media?: FaqMedia;
}

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.css'],
})
export class AyudaPage {
  searchTerm = '';

  faqs: FaqItem[] = [
    {
      question: '¿Cómo puedo abrir mi cuenta en PAYSAT?',
      steps: [
        {
          title: 'Paso 1: Descarga la aplicación',
          subtitle:
            'Descarga PAYSAT desde la tienda oficial o ingresa a mibancapaysat.com para registrarte.',
        },
        {
          title: 'Paso 2: Regístrate con tus datos',
          subtitle: 'Completa tu información personal y verifica tu número de teléfono/correo.',
        },
        {
          title: 'Paso 3: Valida tu identidad',
          subtitle: 'Sigue el proceso de verificación (documento + selfie) para activar tu cuenta.',
        },
      ],
      media: {
        type: 'video-file',
        src: 'https://tudominio.com/media/tutorial-abrir-cuenta.mp4',
        poster: 'https://tudominio.com/media/poster-abrir-cuenta.jpg',
        title: 'Tutorial: abrir cuenta',
      },
    },
    {
      question: '¿Cómo comprar criptomonedas desde PAYSAT móvil?',
      steps: [
        {
          title: 'Paso 1: Entra al módulo Cripto',
          subtitle: 'Desde el menú principal, selecciona “Cripto”.',
        },
        {
          title: 'Paso 2: Elige el activo',
          subtitle: 'Selecciona la criptomoneda (por ejemplo USDT) y revisa el precio.',
        },
        {
          title: 'Paso 3: Confirma la compra',
          subtitle: 'Ingresa el monto, revisa el resumen y confirma con tu PIN/biometría.',
        },
      ],
      media: {
        type: 'image',
        src: 'assets/img/ayuda/cripto.png',
        title: 'Pantalla de compra cripto',
      },
    },
    {
      question: '¿Dónde encuentro el tutorial en YouTube?',
      steps: [
        {
          title: 'Paso 1: Abre Ayuda',
          subtitle: 'Ingresa a la sección de ayuda desde el menú principal.',
        },
        {
          title: 'Paso 2: Reproduce el video',
          subtitle: 'Presiona play en el tutorial embebido.',
        },
      ],
      media: {
        type: 'video-embed',
        src: 'https://www.youtube.com/embed/VIDEO_ID',
        title: 'Tutorial en YouTube',
      },
    },
  ];

  filteredFaqs: FaqItem[] = [...this.faqs];

  constructor(private sanitizer: DomSanitizer) {}

  /** Solo para iframes (YouTube/embeds). No usar para mp4 */
  safeEmbedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredFaqs = [...this.faqs];
      return;
    }

    this.filteredFaqs = this.faqs.filter((faq) => {
      const inQuestion = faq.question.toLowerCase().includes(term);

      const inSteps = faq.steps.some(
        (step) =>
          step.title.toLowerCase().includes(term) || step.subtitle.toLowerCase().includes(term)
      );

      const inMediaTitle = !!faq.media?.title && faq.media.title.toLowerCase().includes(term);

      return inQuestion || inSteps || inMediaTitle;
    });
  }
}
