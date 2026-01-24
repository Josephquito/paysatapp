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
      kicker: 'Banca multidivisa',
      title: 'Banca directa multidivisa (USD, EUR, GBP y más)',
      text1: 'Acceda a una plataforma para operar en múltiples divisas con control corporativo.',
      text2:
        'PAYSAT ofrece banca multidivisa para instituciones financieras y corporaciones a nivel mundial, con acceso a cuentas y operación desde un entorno administrativo en línea disponible 24/7. Diseñado para gestionar saldos y operaciones en distintas divisas y escalar por volumen con precios competitivos.',
      linkText: 'Conoce más sobre banca multidivisa',
      href: '/servicios',
    },
    {
      kicker: 'Cuentas bancarias',
      title: 'Cuentas directas en EE. UU. y cuentas internacionales (incluye IBAN)',
      text1: 'Infraestructura bancaria para recibir y enviar fondos a nivel local e internacional.',
      text2:
        'Acceda a cuentas bancarias directas en Estados Unidos y a cuentas bancarias internacionales, incluyendo IBAN donde aplique. La plataforma se apoya en una red de bancos corresponsales y socios integrados para habilitar operación bancaria en tiempo real para empresas de diferentes tamaños.',
      linkText: 'Conoce más sobre cuentas',
      href: '/servicios',
    },
    {
      kicker: 'Transferencias',
      title: 'Transferencias de entrada y salida (SWIFT, ACH, SEPA y pagos rápidos)',
      text1:
        'Envíe y reciba transferencias nacionales e internacionales con los principales “rails”.',
      text2:
        'Habilite servicios de transferencia de dinero entrante y saliente (internacionales y nacionales) a través de: SWIFT (MT103), ACH, SEPA, SEPA Instantánea y esquemas de Pagos más rápidos. Además, existen servicios adicionales de traslados nacionales según el país, el tipo de cliente y la industria atendida.',
      linkText: 'Conoce más sobre transferencias',
      href: '/servicios',
    },
    {
      kicker: 'Billetera electrónica',
      title: 'Monedero electrónico y fondos en múltiples divisas',
      text1:
        'Guarde fondos y gestione divisas desde una billetera electrónica conectada al ecosistema.',
      text2:
        'PAYSAT ofrece servicios de billetera electrónica para apoyar la operación de depósitos, transferencias y pagos. Según la cobertura, permite mantener fondos en distintas divisas y vincular la operación con cuentas bancarias y canales de transferencia para facilitar flujos internacionales.',
      linkText: 'Conoce más sobre billetera',
      href: '/servicios',
    },
    {
      kicker: 'Pagos globales',
      title: 'Pagos transfronterizos en moneda local (cobertura global)',
      text1: 'Realice pagos internacionales con alcance amplio de países y monedas.',
      text2:
        'Facilite transacciones transfronterizas en moneda local con una red de pagos orientada a operación global. Se indica cobertura de pago a más de 200 países y pagos en 145 monedas, para gestionar obligaciones y beneficiarios distribuidos en diferentes mercados.',
      linkText: 'Ver alcance y monedas',
      href: '/ayuda',
    },
    {
      kicker: 'Tarjetas prepago',
      title: 'Programas de tarjetas de débito prepagas (físicas, virtuales y móviles)',
      text1: 'Lance programas personalizados y “llave en mano” para empresas e instituciones.',
      text2:
        'PAYSAT ofrece un conjunto completo de soluciones de tarjetas de débito prepagadas: físicas, virtuales y móviles. Estas soluciones apoyan pagos a empleados, reembolsos, programas de incentivos/recompensas y gastos corporativos. El servicio incluye gestión del procesamiento y componentes operativos del programa.',
      linkText: 'Conoce más sobre emisión',
      href: '/servicios',
    },
    {
      kicker: 'Implementación del programa',
      title: 'Puesta en marcha completa + canales para titulares',
      text1: 'Go-live y experiencia del titular con componentes digitales integrados.',
      text2:
        'Como parte del programa de tarjetas, se incluye implementación y puesta en marcha, además de canales para titulares como sitio web, IVR, alertas SMS y aplicación móvil. Esto permite habilitar autoservicio, comunicación y operación del programa con una experiencia digital coherente.',
      linkText: 'Conoce más del programa',
      href: '/servicios',
    },
    {
      kicker: 'Cumplimiento y riesgo',
      title: 'Cumplimiento normativo + gestión de riesgos y fraude',
      text1: 'Operación del programa con enfoque en controles y administración de riesgo.',
      text2:
        'El servicio de programas de tarjetas contempla cumplimiento normativo, gestión de riesgos y responsabilidad por fraude. PAYSAT se enfoca en operar programas que atienden necesidades exigentes, incluyendo categorías de negocios de riesgo medio y alto, con soporte operativo y control del programa.',
      linkText: 'Conoce más sobre riesgo y cumplimiento',
      href: '/servicios',
    },
    {
      kicker: 'Operación y backoffice',
      title: 'Operación del programa: inventario, atención al cliente e informes',
      text1: 'Gestión integral para operar, dar soporte y mantener visibilidad del programa.',
      text2:
        'La operación del programa incluye gestión y cumplimiento del inventario de tarjetas (cuando aplique), atención al cliente con agente en vivo, además de informes y entrega de datos. También contempla integración de TI y una red segura con servicio completo para sostener la continuidad operativa.',
      linkText: 'Conoce más sobre operación',
      href: '/servicios',
    },
    {
      kicker: 'Innovación',
      title: 'Motor de reglas y automatización para personalización',
      text1: 'Diseñado para escalar e innovar con configuraciones flexibles.',
      text2:
        'Las capacidades descritas incluyen un motor de reglas extensible por el usuario para dar cabida a aplicaciones de pago innovadoras, además de automatización de funciones administrativas, marketing, operaciones, cumplimiento y servicio al cliente. Esto busca mejorar eficiencia operativa y experiencia del usuario.',
      linkText: 'Conoce más sobre innovación',
      href: '/servicios',
    },
    {
      kicker: 'Pagos móviles',
      title: 'Pagos móviles y entrega electrónica en tiempo real',
      text1:
        'Opciones para tarjeta virtual en móvil, transferencias entre tarjetas y billetera móvil.',
      text2:
        'Se describe a PAYSAT a la vanguardia de los pagos móviles, ofreciendo soluciones de entrega electrónica seguras y en tiempo real. Esto incluye escenarios como tarjeta virtual enviada a un dispositivo móvil, transferencias entre tarjetas o pagos a través de una billetera móvil.',
      linkText: 'Conoce más sobre pagos móviles',
      href: '/servicios',
    },
    {
      kicker: 'Casos de uso',
      title: 'Soluciones prepago para múltiples escenarios empresariales',
      text1: 'Desde pagos a proveedores hasta reembolsos, incentivos y programas especializados.',
      text2:
        'Se listan casos de uso como: financiamiento para procesadores comerciales, financiación dividida, programas de pago de criptomonedas y divisas, programas de pago para agentes/representantes/distribuidores, viajes y gastos, cuentas virtuales para cuentas por pagar, reembolsos, recompensas para empleados, impuestos, servicios gubernamentales, incentivos y descuentos.',
      linkText: 'Ver casos de uso',
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
