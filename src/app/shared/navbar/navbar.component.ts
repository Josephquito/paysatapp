import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { filter, Subscription } from 'rxjs';

type AudienceMode = 'empresas' | 'personas';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [RouterModule, ButtonModule],
})
export class NavbarComponent implements OnInit, OnDestroy {
  mobileOpen = false;
  navVisible = true;

  activeMode: AudienceMode = 'empresas';

  private lastScrollTop = 0;
  private readonly showThreshold = 10;
  private readonly hideAfter = 80;
  private routerSub?: Subscription;

  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLElement>;

  empresasLinks: NavItem[] = [
    {
      label: 'Servicios',
      path: '/empresas/servicios',
    },
  ];

  personasLinks: NavItem[] = [];

  commonLinks: NavItem[] = [
    {
      label: 'Nosotros',
      path: '/nosotros',
    },
    {
      label: 'Ayuda',
      path: '/ayuda',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.syncModeWithUrl(this.router.url);

    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.syncModeWithUrl(event.urlAfterRedirects);
        this.closeMobileMenu();
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  get activeLinks(): NavItem[] {
    return this.activeMode === 'empresas' ? this.empresasLinks : this.personasLinks;
  }

  get logoLink(): string {
    return this.activeMode === 'empresas' ? '/empresas' : '/personas';
  }

  get modeTitle(): string {
    return this.activeMode === 'empresas' ? 'Empresas e Instituciones' : 'Personas';
  }

  get ctaLink(): NavItem {
    return this.activeMode === 'empresas'
      ? {
          label: 'Solicitar demo',
          path: '/empresas/solicitar-demo',
        }
      : {
          label: 'Abrir cuenta',
          path: '/personas/abre-tu-cuenta',
        };
  }

  setMode(mode: AudienceMode): void {
    this.activeMode = mode;
    this.mobileOpen = false;
    this.navVisible = true;

    const target = mode === 'empresas' ? '/empresas' : '/personas';
    this.router.navigate([target]);
  }

  toggleMobileMenu(): void {
    this.mobileOpen = !this.mobileOpen;

    if (this.mobileOpen) {
      this.navVisible = true;
    }
  }

  closeMobileMenu(): void {
    this.mobileOpen = false;
  }

  private syncModeWithUrl(url: string): void {
    if (url.startsWith('/personas')) {
      this.activeMode = 'personas';
      return;
    }

    if (url.startsWith('/empresas')) {
      this.activeMode = 'empresas';
      return;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.mobileOpen) return;

    const target = event.target as HTMLElement;
    const clickedInsideMenu = this.mobileMenu?.nativeElement.contains(target);
    const clickedHamburger = target.closest('.hamburger');
    const clickedToggle = target.closest('.audience-toggle');

    if (!clickedInsideMenu && !clickedHamburger && !clickedToggle) {
      this.closeMobileMenu();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const st =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.mobileOpen) {
      this.closeMobileMenu();
      this.navVisible = true;
      this.lastScrollTop = st;
      return;
    }

    if (st <= this.hideAfter) {
      this.navVisible = true;
      this.lastScrollTop = st;
      return;
    }

    const delta = st - this.lastScrollTop;

    if (Math.abs(delta) < this.showThreshold) return;

    this.navVisible = delta < 0;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
