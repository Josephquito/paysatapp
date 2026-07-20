// personas-home.page.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

interface StepItem {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-personas-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './personas-home.page.html',
  styleUrl: './personas-home.page.css',
})
export class PersonasHomePage {
  @ViewChild('carouselTrack') carouselTrack?: ElementRef<HTMLElement>;

  phoneTransform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  glowTransform = 'translate(0px, 0px)';

  spotlightGradient =
    'radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0) 0%, transparent 60%)';

  cardTransform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  cardShineGradient = 'radial-gradient(circle 200px at 50% 50%, transparent, transparent)';

  services: ServiceItem[] = [
    {
      image: 'home-per1.png',
      title: 'Pago móvil',
      description: 'Envía y recibe dinero usando solo tu número de teléfono.',
    },
    {
      image: 'home-per2.png',
      title: 'Cuentas multidivisa',
      description: 'Opera cuentas de pago en varias monedas desde un solo lugar.',
    },
    {
      image: 'home-per3.png',
      title: 'Tarjetas internacionales',
      description: 'Emite y utiliza tarjetas físicas y virtuales en cualquier parte del mundo.',
    },
    {
      image: 'home-per4.png',
      title: 'Pagos con QR',
      description: 'Paga y cobra mediante códigos QR, sin efectivo y sin fricción.',
    },
    {
      image: 'home-per5.png',
      title: 'Tu dinero, a tu manera',
      description: 'Elige entre wallet, tarjeta o banco local para usar tu saldo.',
    },
    {
      image: 'home-per6.png',
      title: 'Remesas internacionales',
      description: 'Recibe dinero desde el exterior directo en tu cuenta.',
    },
  ];

  steps: StepItem[] = [
    { number: '01', title: 'Regístrate', description: 'Con tu número de teléfono.' },
    { number: '02', title: 'Conecta', description: 'Tu cuenta, tarjeta u otros medios.' },
    {
      number: '03',
      title: 'Envía',
      description: 'Dinero a cualquier persona solo con su teléfono.',
    },
    { number: '04', title: 'Recibe', description: 'Y elige cómo usar o retirar tu saldo.' },
  ];

  scrollCarousel(direction: 1 | -1): void {
    const track = this.carouselTrack?.nativeElement;
    if (!track) return;

    const cardWidth = track.querySelector('.carousel-card')?.clientWidth ?? 280;
    track.scrollBy({ left: direction * (cardWidth + 20), behavior: 'smooth' });
  }

  onMockupMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    // Posición del cursor relativa al centro del contenedor, de -1 a 1
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    const maxTilt = 10; // grados máximos de inclinación
    const rotateY = relX * maxTilt * 2;
    const rotateX = relY * maxTilt * -2;

    this.phoneTransform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const glowRange = 30; // px que se mueve el resplandor
    this.glowTransform = `translate(${relX * glowRange}px, ${relY * glowRange}px)`;
  }

  onMockupLeave(): void {
    this.phoneTransform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    this.glowTransform = 'translate(0px, 0px)';
  }

  onHeroMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

    this.spotlightGradient = `radial-gradient(circle 900px at ${xPercent}% ${yPercent}%, rgba(201, 168, 76, 0.18), transparent 70%)`;
  }

  onHeroLeave(): void {
    this.spotlightGradient =
      'radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0) 0%, transparent 60%)';
  }

  onCardMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    const relX = (event.clientX - rect.left) / rect.width;
    const relY = (event.clientY - rect.top) / rect.height;

    const maxTilt = 6; // antes: 12, mucho menos exagerado
    const rotateY = (relX - 0.5) * maxTilt * 2;
    const rotateX = (relY - 0.5) * maxTilt * -2;

    this.cardTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const xPercent = relX * 100;
    const yPercent = relY * 100;

    this.cardShineGradient = `radial-gradient(circle 220px at ${xPercent}% ${yPercent}%, rgba(255, 255, 255, 0.25), transparent 70%)`;
  }

  onCardLeave(): void {
    this.cardTransform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    this.cardShineGradient = 'radial-gradient(circle 200px at 50% 50%, transparent, transparent)';
  }
}
