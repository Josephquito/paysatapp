import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type SolutionCategory = 'infraestructura' | 'cuentas' | 'tarjetas' | 'remesas';

interface Solution {
  image: string;
  title: string;
  description: string;
  category: SolutionCategory;
}

interface FilterOption {
  value: 'todas' | SolutionCategory;
  label: string;
}

@Component({
  selector: 'app-servicios-empresas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios-empresas.page.html',
  styleUrl: './servicios-empresas.page.css',
})
export class ServiciosEmpresasPage {
  activeFilter: FilterOption['value'] = 'todas';

  filters: FilterOption[] = [
    { value: 'todas', label: 'Todas' },
    { value: 'infraestructura', label: 'Infraestructura' },
    { value: 'cuentas', label: 'Cuentas y wallets' },
    { value: 'tarjetas', label: 'Tarjetas y pagos' },
    { value: 'remesas', label: 'Remesas y transferencias' },
  ];

  solutions: Solution[] = [
    {
      image: 'service1.png',
      title: 'Core Banking Digital',
      description:
        'Administra clientes, cuentas, saldos, tarjetas, pagos e historial transaccional desde una sola plataforma con reportes en tiempo real.',
      category: 'infraestructura',
    },
    {
      image: 'service2.png',
      title: 'Plataforma White Label',
      description:
        'Aplicación, wallet, tarjetas y dominio bajo tu propia marca. Tu institución conserva su identidad, PAYSAT pone la tecnología.',
      category: 'infraestructura',
    },
    {
      image: 'service3.png',
      title: 'Billetera Electrónica',
      description:
        'Tus clientes reciben, envían y administran dinero desde el móvil, con transacciones instantáneas y saldos en USD.',
      category: 'cuentas',
    },
    {
      image: 'service4.png',
      title: 'Cuentas Virtuales USD',
      description:
        'Cuentas individuales y multidivisa con recepción de fondos internacionales, ideales para remesas y comercio.',
      category: 'cuentas',
    },
    {
      image: 'service5.png',
      title: 'Tarjetas VISA',
      description:
        'Programas virtuales, físicos, corporativos y prepago — con marca personalizada y gestión completa de riesgo y emisión.',
      category: 'tarjetas',
    },
    {
      image: 'service6.png',
      title: 'QR Payments',
      description:
        'Cobros en comercio, pagos P2P y recaudaciones institucionales, con menor costo operativo y eliminación de efectivo.',
      category: 'tarjetas',
    },
    {
      image: 'service7.png',
      title: 'Remesas Digitales',
      description:
        'Programas de remesas internacionales que conectan migrantes con sus familias, con nuevas fuentes de ingreso para tu institución.',
      category: 'remesas',
    },
    {
      image: 'service8.png',
      title: 'Transferencias Internacionales',
      description:
        'Envíos, recepción de fondos y pagos corporativos con alcance global y mayor trazabilidad.',
      category: 'remesas',
    },
  ];

  get filteredSolutions(): Solution[] {
    if (this.activeFilter === 'todas') return this.solutions;
    return this.solutions.filter((s) => s.category === this.activeFilter);
  }

  setFilter(filter: FilterOption['value']): void {
    this.activeFilter = filter;
  }
}
