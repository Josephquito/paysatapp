import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [RouterModule, MenubarModule, ButtonModule],
})
export class NavbarComponent {
  mobileOpen = false;

  // NUEVO: controla visibilidad del navbar
  navVisible = true;

  // NUEVO: estado scroll
  private lastScrollTop = 0;
  private readonly showThreshold = 10; // evita parpadeo por micro-scroll
  private readonly hideAfter = 80; // no ocultar cerca del top

  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLElement>;

  items: MenuItem[] = [
    { label: 'Inicio', routerLink: '/home' },
    { label: 'Servicios', routerLink: '/servicios' },
    { label: 'Nosotros', routerLink: '/nosotros' },
    { label: 'Ayuda', routerLink: '/ayuda' },
  ];

  toggleMobileMenu() {
    this.mobileOpen = !this.mobileOpen;

    // Si abren el menú, forzamos navbar visible
    if (this.mobileOpen) this.navVisible = true;
  }

  closeMobileMenu() {
    this.mobileOpen = false;
  }

  // Cerrar al hacer click fuera del panel (y no en el botón hamburguesa)
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.mobileOpen) return;

    const target = event.target as HTMLElement;
    const clickedInsideMenu = this.mobileMenu?.nativeElement.contains(target);
    const clickedHamburger = target.closest('.hamburger');

    if (!clickedInsideMenu && !clickedHamburger) {
      this.closeMobileMenu();
    }
  }

  // Scroll: (1) cerrar menú mobile, (2) mostrar/ocultar navbar según dirección
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const st =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Si el menú móvil está abierto: lo cerramos y mantenemos navbar visible
    if (this.mobileOpen) {
      this.closeMobileMenu();
      this.navVisible = true;
      this.lastScrollTop = st;
      return;
    }

    // Cerca del top: navbar siempre visible
    if (st <= this.hideAfter) {
      this.navVisible = true;
      this.lastScrollTop = st;
      return;
    }

    const delta = st - this.lastScrollTop;

    // Evita parpadeo con movimientos mínimos
    if (Math.abs(delta) < this.showThreshold) return;

    // Subes => visible | Bajas => oculto
    this.navVisible = delta < 0;

    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
