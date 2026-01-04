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

  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLElement>;

  items: MenuItem[] = [
    { label: 'Inicio', routerLink: '/home' },
    { label: 'Servicios', routerLink: '/servicios' },
    { label: 'Nosotros', routerLink: '/nosotros' },
    { label: 'Ayuda', routerLink: '/ayuda' },
  ];

  toggleMobileMenu() {
    this.mobileOpen = !this.mobileOpen;
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

  // Cerrar al hacer scroll
  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.mobileOpen) this.closeMobileMenu();
  }
}
