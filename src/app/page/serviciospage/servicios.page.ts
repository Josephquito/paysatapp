import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type ServiceItem = {
  title: string;
  kicker?: string;
  text1?: string;
  text2?: string;
  linkText?: string;
  href?: string;
};

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.css'],
})
export class ServiciosPage {
  services: ServiceItem[] = [
    {
      kicker: 'Banca global',
      title: 'Cuentas multidivisa + administración 24/7',
      text1: 'Gestione saldos y operaciones en múltiples divisas desde una sola plataforma.',
      text2:
        'Acceda a una solución de banca multidivisa para instituciones financieras y corporaciones globales. Administre cuentas, movimientos y estados operativos desde un panel en línea 24/7, con una experiencia diseñada para control corporativo, trazabilidad y escalabilidad por volumen.',
      linkText: 'Conoce más sobre banca multidivisa',
      href: '/servicios',
    },
    {
      kicker: 'Cuentas bancarias',
      title: 'Cuentas directas en EE. UU. e internacionales + IBAN',
      text1: 'Infraestructura bancaria para operar en USD y expandirse globalmente.',
      text2:
        'Habilite cuentas bancarias directas en Estados Unidos y cuentas internacionales, incluyendo IBAN donde aplique. Diseñado para facilitar cobros y pagos transfronterizos, mejorar la conciliación y acelerar la operación en mercados clave, con soporte de socios integrados y banca corresponsal.',
      linkText: 'Conoce más sobre cuentas',
      href: '/servicios',
    },
    {
      kicker: 'Billeteras',
      title: 'Billetera electrónica multidivisa',
      text1: 'Guarde, mueva y utilice fondos con flexibilidad operativa.',
      text2:
        'E-wallet para clientes corporativos y financieros con gestión de saldos, movimientos y uso operativo en distintos escenarios. Permite almacenar múltiples divisas (según cobertura) y conectar la operación con canales de transferencia y programas de pago, reduciendo fricción en flujos internacionales.',
      linkText: 'Conoce más sobre billetera',
      href: '/servicios',
    },
    {
      kicker: 'Cobertura',
      title: 'Pagos globales (países y monedas)',
      text1: 'Expanda su alcance con pagos internacionales en moneda local.',
      text2:
        'Capacidades de pagos transfronterizos orientadas a operación global: cobertura internacional amplia y ejecución en múltiples monedas para facilitar pagos en moneda local cuando sea posible. Ideal para empresas con redes distribuidas, proveedores internacionales y necesidades de liquidación multi-país.',
      linkText: 'Ver cobertura y monedas',
      href: '/ayuda',
    },
    {
      kicker: 'Transferencias',
      title: 'Transferencias y rails (SWIFT, ACH, SEPA, pagos rápidos)',
      text1: 'Entrada y salida de fondos a través de canales bancarios principales.',
      text2:
        'Integre transferencias internacionales y nacionales con los rails disponibles según jurisdicción: SWIFT (MT103), ACH, SEPA, SEPA Instant y esquemas de pagos más rápidos donde aplique. Pensado para optimizar velocidad, costo y trazabilidad, y cubrir escenarios donde ciertos rails no estén disponibles.',
      linkText: 'Conoce más sobre transferencias',
      href: '/servicios',
    },
    {
      kicker: 'Tarjetas',
      title: 'Emisión de tarjetas prepago (físicas, virtuales y móviles)',
      text1: 'Programas completos para consumidores y empresas, listos para escalar.',
      text2:
        'Lance programas de tarjetas de débito prepago personalizadas y llave en mano: físicas, virtuales y móviles. Incluye opciones de carga de fondos, control de uso y experiencia digital para titulares, orientado a pagos a empleados, reembolsos, incentivos, gastos corporativos y distribución masiva.',
      linkText: 'Conoce más sobre emisión',
      href: '/servicios',
    },
    {
      kicker: 'Red de aceptación',
      title: 'Aceptación global y retiro de fondos',
      text1: 'Uso en comercios y disponibilidad de efectivo según el programa.',
      text2:
        'Aproveche redes de aceptación para compras en comercios y habilite retiros en cajeros automáticos según el alcance del programa. Diseñado para operación internacional, beneficiarios distribuidos y escenarios donde se requiere disponibilidad inmediata y flexible de fondos.',
      linkText: 'Conoce más sobre aceptación',
      href: '/servicios',
    },
    {
      kicker: 'Implementación',
      title: 'Implementación y puesta en marcha (go-live)',
      text1: 'Arranque del programa con acompañamiento integral.',
      text2:
        'Acompañamiento en implementación y salida a producción, priorizando tiempo de comercialización. Incluye definición operativa, configuración, lineamientos de operación y coordinación para que el programa funcione de forma estable y escalable desde el primer día.',
      linkText: 'Solicitar acompañamiento',
      href: '/contacto',
    },
    {
      kicker: 'Canales',
      title: 'Canales para titulares (web, IVR, SMS y app)',
      text1: 'Experiencia de usuario y comunicación operativa integrada.',
      text2:
        'Habilite canales de autoservicio y soporte para titulares: portal web, IVR, alertas SMS y aplicación móvil. Estos componentes mejoran experiencia, reducen carga operativa y aumentan control y comunicación sobre eventos relevantes del programa.',
      linkText: 'Conoce más sobre canales',
      href: '/servicios',
    },
    {
      kicker: 'Cumplimiento y riesgo',
      title: 'Cumplimiento normativo + gestión de fraude',
      text1: 'Operación alineada a estándares internacionales y control de riesgos.',
      text2:
        'Componentes de cumplimiento integrados a la operación del programa, junto con gestión de riesgos y tratamiento de responsabilidades por fraude según el esquema. Enfoque en continuidad operativa, controles y soporte para crecimiento sostenible en mercados exigentes.',
      linkText: 'Conoce más sobre cumplimiento',
      href: '/servicios',
    },
    {
      kicker: 'Operación',
      title: 'Operación del programa (inventario, atención y soporte)',
      text1: 'Backoffice para continuidad, soporte a titulares y control del programa.',
      text2:
        'Gestión operativa completa que incluye control de inventario de tarjetas (cuando aplique) y soporte al usuario final mediante atención y gestión de incidencias. Diseñado para garantizar continuidad del servicio, respuesta oportuna y operación estable a diferentes volúmenes.',
      linkText: 'Conoce más sobre operación',
      href: '/contacto',
    },
    {
      kicker: 'Plataforma',
      title: 'Plataforma de registro + motor de autorización',
      text1: 'Base tecnológica para alta, control y procesamiento transaccional.',
      text2:
        'Sistema de registro y administración del programa con motor de autorización para control transaccional. Permite configurar reglas, administrar componentes del programa y sostener procesamiento con enfoque en seguridad, trazabilidad y escalabilidad.',
      linkText: 'Conoce más sobre plataforma',
      href: '/servicios',
    },
    {
      kicker: 'Datos',
      title: 'Reportes, analítica y entrega de datos',
      text1: 'Información operativa para control, auditoría y decisiones.',
      text2:
        'Reportería operativa y entrega de datos para seguimiento de transacciones, control administrativo y soporte a conciliación. Ideal para equipos financieros y de operación que requieren visibilidad, trazabilidad y métricas consistentes.',
      linkText: 'Conoce más sobre reportes',
      href: '/servicios',
    },
    {
      kicker: 'Liquidación',
      title: 'Conciliación, funding y liquidación bancaria',
      text1: 'Procesos financieros para mantener el programa consistente y trazable.',
      text2:
        'Servicios de conciliación, funding y liquidación bancaria alineados al esquema operativo. Orientado a mantener continuidad de fondos, trazabilidad financiera y control de settlement, especialmente en operaciones de alto volumen o multi-jurisdicción.',
      linkText: 'Conoce más sobre liquidación',
      href: '/servicios',
    },
    {
      kicker: 'Integración',
      title: 'Integración TI y red segura (API / conectividad)',
      text1: 'Conecte su operación con una infraestructura bancaria y de pagos completa.',
      text2:
        'Integración tecnológica para conectar su plataforma o core con el ecosistema de pagos y banca. Enfoque en conectividad segura, estabilidad, escalabilidad y soporte a diferentes modelos de negocio, permitiendo integración progresiva según prioridades.',
      linkText: 'Conoce más sobre integración',
      href: '/servicios',
    },
    {
      kicker: 'Segmentos',
      title: 'Soluciones para fintech, PSP y negocios de riesgo medio/alto',
      text1: 'Modelos flexibles para industrias con requisitos operativos exigentes.',
      text2:
        'Atendemos corporaciones e instituciones financieras con y sin licencia, incluyendo modelos fintech y PSP. Diseñado para necesidades específicas de operación transfronteriza, control, cumplimiento y escalabilidad, con enfoque en ejecución y continuidad del servicio.',
      linkText: 'Evaluar mi industria',
      href: '/contacto',
    },
    {
      kicker: 'Arquitectura',
      title: 'Modelos open-loop / closed-loop',
      text1: 'Flexibilidad para construir ecosistemas de pago adaptados a su operación.',
      text2:
        'Soporte para esquemas de procesamiento de circuito abierto y circuito cerrado, según el caso de uso. Permite diseñar programas con distintos niveles de control, alcance, aceptación y distribución, especialmente útil para mercados y operaciones con necesidades únicas.',
      linkText: 'Conoce más sobre modelos',
      href: '/servicios',
    },
    {
      kicker: 'Casos de uso',
      title: 'Programas de pago por caso (nómina, proveedores, reembolsos, incentivos)',
      text1: 'Pagos empresariales optimizados para múltiples escenarios.',
      text2:
        'Soluciones para pagos a empleados (nómina), proveedores, clientes, reembolsos e incentivos. Permite seleccionar el canal adecuado (transferencia o tarjeta) para reducir fricción, mejorar tiempos, aumentar control y facilitar conciliación en operaciones masivas.',
      linkText: 'Ver casos de uso',
      href: '/servicios',
    },
    {
      kicker: 'Innovación',
      title: 'Automatización y motor de reglas para personalización',
      text1: 'Configure ofertas por público objetivo sin perder eficiencia operativa.',
      text2:
        'Plataforma diseñada para soportar innovación continua: motor de reglas extensible y automatización de funciones administrativas, operativas, de cumplimiento y de soporte. Esto reduce costos, mejora eficiencia y habilita programas altamente personalizables sin complejidad innecesaria.',
      linkText: 'Conoce más sobre innovación',
      href: '/servicios',
    },
  ];

  visibleCount = 6;
  step = 3;

  get visibleServices(): ServiceItem[] {
    return this.services.slice(0, this.visibleCount);
  }

  get hasMore(): boolean {
    return this.visibleCount < this.services.length;
  }

  loadMore(): void {
    this.visibleCount = Math.min(this.visibleCount + this.step, this.services.length);
  }
}
