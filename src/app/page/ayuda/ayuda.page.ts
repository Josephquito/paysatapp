import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChatWidgetComponent } from '../../shared/chat-widget/chat-widget.component';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';

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
  imports: [CommonModule, FormsModule, ContactFormComponent],
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.css'],
})
export class AyudaPage {
  searchTerm = '';

  @ViewChild(ChatWidgetComponent) chatWidget?: ChatWidgetComponent;

  faqs: FaqItem[] = [
    {
      question: '¿Qué es PAYSAT?',
      steps: [
        {
          title: 'Resumen',
          subtitle: 'PAYSAT es una plataforma de banca digital multidivisa y soluciones de pago.',
        },
        {
          title: 'Qué permite hacer',
          subtitle:
            'Permite a empresas, instituciones financieras y usuarios acceder a cuentas bancarias, billeteras electrónicas, transferencias nacionales e internacionales y programas de tarjetas de débito.',
        },
        {
          title: 'Enfoque',
          subtitle: 'Opera de forma segura y escalable.',
        },
      ],
    },
    {
      question: '¿Qué tipos de clientes pueden usar PAYSAT?',
      steps: [
        {
          title: 'A quién está dirigido',
          subtitle:
            'PAYSAT está diseñado para empresas, instituciones financieras, FinTech, PSP, comercios internacionales y usuarios individuales.',
        },
        {
          title: 'Perfiles',
          subtitle: 'Incluye modelos de negocio de riesgo medio y alto.',
        },
        {
          title: 'Condición',
          subtitle: 'Sujeto a procesos de evaluación y cumplimiento normativo.',
        },
      ],
    },
    {
      question: '¿En qué países opera PAYSAT?',
      steps: [
        {
          title: 'Alcance',
          subtitle: 'PAYSAT ofrece servicios con alcance internacional.',
        },
        {
          title: 'Infraestructura',
          subtitle: 'Cuenta con infraestructura bancaria en Estados Unidos y otros países.',
        },
        {
          title: 'Cobertura',
          subtitle:
            'Puede operar y realizar pagos en más de 200 países y múltiples monedas, según el servicio y el cumplimiento regulatorio aplicable.',
        },
      ],
    },
    {
      question: '¿Qué monedas admite la plataforma?',
      steps: [
        {
          title: 'Divisas soportadas',
          subtitle:
            'La plataforma soporta múltiples divisas, incluyendo USD, EUR, GBP y otras monedas.',
        },
        {
          title: 'Uso',
          subtitle:
            'Permite almacenar, enviar y recibir fondos a través de cuentas bancarias y billeteras electrónicas.',
        },
        {
          title: 'Nota',
          subtitle: 'La disponibilidad puede variar según el servicio.',
        },
      ],
    },
    {
      question: '¿Puedo recibir y enviar transferencias internacionales?',
      steps: [
        {
          title: 'Sí',
          subtitle:
            'PAYSAT permite transferencias entrantes y salientes tanto nacionales como internacionales.',
        },
        {
          title: 'Canales',
          subtitle: 'Disponible mediante ACH, SEPA, SEPA Instant, SWIFT y otros esquemas locales.',
        },
        {
          title: 'Dependencias',
          subtitle: 'La disponibilidad depende del país.',
        },
      ],
    },
    {
      question: '¿PAYSAT emite tarjetas de débito?',
      steps: [
        {
          title: 'Sí',
          subtitle:
            'PAYSAT ofrece programas de tarjetas de débito prepago físicas, virtuales y móviles.',
        },
        {
          title: 'Personalización',
          subtitle: 'Son totalmente personalizables.',
        },
        {
          title: 'Redes',
          subtitle:
            'Respaldadas por redes internacionales como Visa, MasterCard o UnionPay, según el programa contratado.',
        },
      ],
    },
    {
      question: '¿Las tarjetas y cuentas están vinculadas a una billetera digital?',
      steps: [
        {
          title: 'Vinculación',
          subtitle: 'Sí. Las tarjetas pueden vincularse a billeteras electrónicas multidivisa.',
        },
        {
          title: 'Funciones',
          subtitle: 'Permite cargar fondos y gestionar gastos de forma centralizada.',
        },
        {
          title: 'Operación',
          subtitle: 'También permite realizar pagos y retiros en cajeros automáticos.',
        },
      ],
    },
    {
      question: '¿Es seguro usar PAYSAT?',
      steps: [
        {
          title: 'Prioridad',
          subtitle: 'La seguridad es una prioridad.',
        },
        {
          title: 'Controles',
          subtitle:
            'PAYSAT aplica medidas de seguridad técnicas y operativas, gestión de riesgos y prevención de fraude.',
        },
        {
          title: 'Cumplimiento',
          subtitle:
            'Incluye procesos de cumplimiento normativo (KYC, AML y compliance) alineados con estándares internacionales.',
        },
      ],
    },
    {
      question: '¿Qué procesos de verificación se requieren para usar la plataforma?',
      steps: [
        {
          title: 'Depende del cliente y servicio',
          subtitle: 'Los requisitos varían según el tipo de cliente y el servicio solicitado.',
        },
        {
          title: 'Verificaciones',
          subtitle:
            'Puede requerirse verificación de identidad, información corporativa, beneficiarios finales y análisis de riesgo.',
        },
        {
          title: 'Marco',
          subtitle: 'De acuerdo con las regulaciones aplicables.',
        },
      ],
    },
    {
      question: '¿PAYSAT es un banco?',
      steps: [
        {
          title: 'No',
          subtitle: 'PAYSAT no actúa como banco tradicional.',
        },
        {
          title: 'Qué es',
          subtitle: 'Opera como una plataforma tecnológica financiera.',
        },
        {
          title: 'Cómo opera',
          subtitle:
            'Trabaja junto a bancos corresponsales, emisores y socios financieros autorizados para ofrecer servicios bancarios y de pago.',
        },
      ],
    },
    {
      question: '¿Puedo integrar PAYSAT a mi sistema o plataforma?',
      steps: [
        {
          title: 'Sí',
          subtitle: 'PAYSAT ofrece opciones de integración tecnológica.',
        },
        {
          title: 'Para quién',
          subtitle:
            'Dirigido a empresas y plataformas FinTech que requieran conectar sus sistemas a servicios de banca digital, pagos y emisión de tarjetas.',
        },
        {
          title: 'Siguiente paso',
          subtitle: 'El alcance de integración depende del servicio contratado.',
        },
      ],
    },
    {
      question: '¿Existen límites en las transacciones?',
      steps: [
        {
          title: 'Sí, existen',
          subtitle:
            'Los límites dependen del tipo de cuenta, el perfil del cliente, la jurisdicción y el nivel de verificación.',
        },
        {
          title: 'Cuándo se informan',
          subtitle: 'Se informan durante el proceso de onboarding.',
        },
        {
          title: 'Ajustes',
          subtitle: 'Pueden ajustarse según el caso.',
        },
      ],
    },
    {
      question: '¿Cuáles son los costos o comisiones del servicio?',
      steps: [
        {
          title: 'Varían por caso',
          subtitle:
            'Las tarifas varían según el tipo de servicio, volumen de transacciones y perfil del cliente.',
        },
        {
          title: 'Enfoque',
          subtitle: 'PAYSAT ofrece esquemas de precios competitivos y personalizados.',
        },
        {
          title: 'Acción recomendada',
          subtitle: 'Para más información, se recomienda contactar al equipo comercial.',
        },
      ],
    },
    {
      question: '¿Cómo puedo obtener soporte o atención al cliente?',
      steps: [
        {
          title: 'Soporte disponible',
          subtitle:
            'PAYSAT ofrece canales de soporte y atención al cliente para resolver consultas técnicas, operativas y administrativas.',
        },
        {
          title: 'Alcance',
          subtitle: 'La atención depende del servicio contratado.',
        },
        {
          title: 'Recomendación',
          subtitle:
            'Si no encuentras solución, utiliza los canales de contacto disponibles en el sitio.',
        },
      ],
    },
    {
      question: '¿Dónde puedo consultar la documentación legal y políticas?',
      steps: [
        {
          title: 'Disponibilidad',
          subtitle:
            'La documentación legal incluye Términos y Condiciones, Política de Privacidad y Avisos Legales.',
        },
        {
          title: 'Ubicación',
          subtitle: 'Está disponible públicamente en el sitio web de PAYSAT.',
        },
        {
          title: 'Acceso',
          subtitle: 'Puedes consultarla desde la sección de Información legal.',
        },
      ],
    },
  ];

  filteredFaqs: FaqItem[] = [...this.faqs];

  constructor(private sanitizer: DomSanitizer) {}

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
          step.title.toLowerCase().includes(term) || step.subtitle.toLowerCase().includes(term),
      );
      const inMediaTitle = !!faq.media?.title && faq.media.title.toLowerCase().includes(term);
      return inQuestion || inSteps || inMediaTitle;
    });
  }
}
