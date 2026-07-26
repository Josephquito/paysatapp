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
    // Al no venir del servidor, no pasa por hidratación y el
    // autoplay nativo no debería fallar. Forzamos play() como refuerzo.
    setTimeout(() => {
      const video = this.heroVideo?.nativeElement;
      if (!video) return;

      video.muted = true;
      video.play().catch(() => {});
    });
  }
}
