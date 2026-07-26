import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empresas-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './empresas-home.page.html',
  styleUrl: './empresas-home.page.css',
})
export class EmpresasHomePage implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    // El video recién se monta aquí, en el cliente, tras el *ngIf.
    setTimeout(() => this.initVideo());
  }

  private initVideo(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    // Intento inmediato
    tryPlay();

    // Reintentos en distintos momentos del ciclo de carga del video.
    // Cubre casos donde el primer play() se dispara antes de que el
    // navegador esté listo para permitir autoplay.
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('canplaythrough', tryPlay);

    // Esto replica el "workaround" de cambiar de pestaña y volver:
    // ahora queda automático desde la primera carga también.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') tryPlay();
    });

    window.addEventListener('pageshow', tryPlay);
    window.addEventListener('focus', tryPlay);
  }
}
