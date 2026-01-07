import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ServiceItem = {
  title: string;
  kicker?: string;
  text1?: string;
  text2?: string;
  linkText?: string;
  href?: string;
};

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.css'],
})
export class ServiciosPage {
  services: ServiceItem[] = [
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 1',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 2',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 3',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 4',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 5',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 6',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 7',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 8',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 9',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 10',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 11',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 12',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
    {
      kicker: 'Servicios',
      title: 'Nombre del Servicio 13',
      text1: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text2:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      linkText: 'Conoce más sobre servicio',
      href: '/home',
    },
  ];

  visibleCount = 6;
  step = 3;

  get visibleServices(): ServiceItem[] {
    return this.services.slice(0, this.visibleCount);
  }

  get hasMore(): boolean {
    return this.visibleCount < this.services.length;
  }

  loadMore(): void {
    this.visibleCount = Math.min(this.visibleCount + this.step, this.services.length);
  }
}
