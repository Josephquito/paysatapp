import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'servicios',
    loadComponent: () => import('./page/serviciospage/servicios.page').then((m) => m.ServiciosPage),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./page/nosotros/nosotros.page').then((m) => m.NosotrosPage),
  },
  {
    path: 'ayuda',
    loadComponent: () => import('./page/ayuda/ayuda.page').then((m) => m.AyudaPage),
  },
  {
    path: 'legal-documents',
    loadComponent: () =>
      import('./page/legal documents/legal-documents.page').then((m) => m.LegalDocumentsPage),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
