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

    tryPlay();

    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('canplaythrough', tryPlay);

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') tryPlay();
    });

    window.addEventListener('pageshow', tryPlay);
    window.addEventListener('focus', tryPlay);

    // Red de seguridad silenciosa: el primer toque del usuario en
    // CUALQUIER parte de la página (no solo el video) reintenta el play.
    // El usuario nunca ve nada raro — solo hace que, si el navegador
    // había bloqueado el autoplay, se desbloquee con su primer gesto
    // natural (scroll, tap en un link, etc.), sin necesitar tocar el video.
    const silentUnlock = () => {
      tryPlay();
      document.removeEventListener('touchstart', silentUnlock);
      document.removeEventListener('click', silentUnlock);
      document.removeEventListener('scroll', silentUnlock);
    };
    document.addEventListener('touchstart', silentUnlock, { once: true, passive: true });
    document.addEventListener('click', silentUnlock, { once: true });
    document.addEventListener('scroll', silentUnlock, { once: true, passive: true });
  }
}
