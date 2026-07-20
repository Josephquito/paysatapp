import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.css'],
  imports: [CommonModule],
})
export class PrivacyPolicyPage implements OnInit, AfterViewInit {
  activeSection = 'identificacion';

  sections = [
    { id: 'identificacion', label: 'Identificación del responsable' },
    { id: 'contacto', label: 'Canales de contacto' },
    { id: 'marcas', label: 'Marcas y plataformas vinculadas' },
    { id: 'finalidad', label: 'Finalidad del tratamiento' },
    { id: 'seguridad', label: 'Seguridad y transferencia' },
    { id: 'derechos', label: 'Derechos del titular' },
  ];

  private observer?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.setupScrollSpy(), 100);
    }
  }

  scrollToSection(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  private setupScrollSpy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
            this.cdr.detectChanges();
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    this.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) this.observer!.observe(el);
    });
  }
}
