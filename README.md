# Paysat – Frontend Web

Este proyecto corresponde al **frontend web de Paysat**, desarrollado en **Angular** y desplegado actualmente en el dominio oficial.

El objetivo del proyecto es presentar información institucional, los servicios ofrecidos por la empresa y permitir la interacción de los usuarios mediante un **formulario de contacto** y un **chatbot**.

---

## Tecnologías utilizadas

- **Angular** (Angular CLI v21.0.4)
- **PrimeNG** (librería de componentes UI)
- **TypeScript**
- **HTML / SCSS**

---

## Estructura del proyecto

La estructura del proyecto se encuentra organizada de la siguiente manera:

src/

├── app/

│ ├── page/ # Páginas principales del sitio

│ ├── shared/ # Componentes compartidos

│ ├── services/ # Servicios para consumo de APIs

│ ├── app.routes.ts # Definición de rutas

│ └── app.config.ts

### Carpeta `shared`

Contiene todos los **componentes reutilizables** del sistema, tales como:

- Navbar
- Footer
- Chatbot
- Formulario de contacto

### Carpeta `page`

Contiene las **páginas principales** del sitio web:

- Home
- Servicios
- Nosotros
- Ayuda
- Documentos legales
- Abrir cuenta

---

## Rutas de la aplicación

La aplicación utiliza **lazy loading** mediante `loadComponent`.  
Las rutas actualmente disponibles son las siguientes:

```ts
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
  {
    path: 'Abre-tu-cuenta',
    loadComponent: () =>
      import('./page/abre-tu-cuenta/abre-tu-cuenta.page').then((m) => m.AbreTuCuentaPage),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
```

## Autenticación

Este proyecto no maneja autenticación (Auth), ya que no es requerida para el alcance actual del sitio web.

## Consumo de APIs

La aplicación consume dos APIs externas, gestionadas mediante servicios Angular ubicados en la carpeta services:

API de formulario de contacto
Utilizada para el envío de mensajes desde el formulario web.

API de chatbot
Utilizada para la interacción del usuario con el chatbot.

Las URLs de estas APIs se gestionan mediante variables de entorno.

## Notas adicionales

El proyecto utiliza PrimeNG como librería principal de componentes visuales.

La arquitectura está pensada para facilitar el mantenimiento y la reutilización de componentes.

No se almacenan credenciales ni información sensible dentro del repositorio.
