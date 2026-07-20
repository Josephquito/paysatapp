import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abre-tu-cuenta.page.html',
  styleUrls: ['./abre-tu-cuenta.page.css'],
})
export class AbreTuCuentaPage {
  // Cuando tengas los links oficiales, reemplaza estos valores.
  appStoreUrl = '#';
  googlePlayUrl = '#';
}
