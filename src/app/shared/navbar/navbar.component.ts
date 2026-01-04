import { Component } from '@angular/core';
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
}
