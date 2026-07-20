import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'empresas',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./page/empresas/empresas-home/empresas-home.page').then(
            (m) => m.EmpresasHomePage,
          ),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./page/empresas/servicios-empresas/servicios-empresas.page').then(
            (m) => m.ServiciosEmpresasPage,
          ),
      },
      {
        path: 'solicitar-demo',
        loadComponent: () =>
          import('./page/empresas/solicitar-demo/solicitar-demo.page').then(
            (m) => m.SolicitarDemoPage,
          ),
      },
    ],
  },
  {
    path: 'personas',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./page/personas/personas-home/personas-home.page').then(
            (m) => m.PersonasHomePage,
          ),
      },
      {
        path: 'abre-tu-cuenta',
        loadComponent: () =>
          import('./page/personas/abre-tu-cuenta/abre-tu-cuenta.page').then(
            (m) => m.AbreTuCuentaPage,
          ),
      },
    ],
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

  { path: '', pathMatch: 'full', redirectTo: 'empresas' },
];
