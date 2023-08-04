import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {
  @ViewChild('icon_nav_2') icon_nav_2!: ElementRef
  @ViewChild('navbar_menu') navbar_menu!: ElementRef
  @ViewChild('div_close') div_close!: ElementRef

  constructor(private renderer: Renderer2) { }
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  itemsPerSlide = 3;

  options = [{
    id: '1',
    name: 'uno'
  },
  {
    id: '1',
    name: 'dos'
  }, {
    id: '3',
    name: 'tres'
  }]

  buildings = [{
    id: '27',
    name: 'Casas'
  }, {
    id: '18',
    name: 'Condominios'
  },
  {
    id: '1',
    name: 'Terrenos'
  }, {
    id: '5',
    name: 'Locales comerciales'
  }]

  recently_buildings = [{
    id: '001',
    name: 'Casa en venta',
    price: '300000',
    size: '600',
    rooms: '4',
    venta: true,
    image: '../../../assets/src/images/helpers/MONO_ASESORAMOS_T.webp'
  },
  {
    id: '002',
    name: 'Casa en Renta',
    price: '300000',
    size: '600',
    rooms: '4',
    venta: false,
    image: '../../../assets/src/images/helpers/MONO_ASESORAMOS_T.webp'
  },
  {
    id: '003',
    name: 'Terreno en venta',
    price: '300000',
    size: '600',
    rooms: '4',
    venta: true,
    image: '../../../assets/src/images/helpers/MONO_ASESORAMOS_T.webp'
  },
  {
    id: '004',
    name: 'Casa en venta',
    price: '300000',
    size: '600',
    rooms: '4',
    venta: true,
    image: '../../../assets/src/images/helpers/MONO_ASESORAMOS_T.webp'
  },
  {
    id: '005',
    name: 'Condominio en venta',
    price: '300000',
    size: '600',
    rooms: '4',
    venta: true,
    image: '../../../assets/src/images/helpers/MONO_ASESORAMOS_T.webp'
  },
  {
    id: '006',
    name: 'Departamento en renta',
    price: '300000',
    size: '600',
    rooms: '4',
    venta: false,
    image: '../../../assets/src/images/helpers/MONO_ASESORAMOS_T.webp'
  }
  ]

  ngOnInit(): void {

    /*  if (document.readyState == 'complete') {
       AOS.refresh();
     } */
    AOS.init()
    window.addEventListener('load', AOS.refresh)

    /*    AOS.init({
         duration: 750,
         delay: 150,
       }) */


    /* ngAfterViewInit(): void {
      setTimeout(() => {
        AOS.refresh()
      }, 500) */

    this.slides[0] = {
      src: '../../../assets/src/images/RECOVE_RECOVE_B_T.webp',
    };
    this.slides[1] = {
      src: '../../../assets/src/images/RECOVE_RECOVE_N_T.webp',
    }
    this.slides[2] = {
      src: '../../../assets/src/images/RECOVE_RECOVE_B_T.webp',
    }
  }


  showMenu() {
    console.log("show menú");
    this.renderer.removeStyle(this.navbar_menu.nativeElement, 'transform')
    this.renderer.setStyle(this.navbar_menu.nativeElement, 'transform', 'translateX(0%)')
    this.renderer.addClass(this.icon_nav_2.nativeElement, 'animate__bounceOut')
    this.renderer.removeClass(this.div_close.nativeElement, 'animate__zoomOut');
    this.renderer.addClass(this.div_close.nativeElement, 'animate__zoomIn');

  }

  closeMenu() {
    this.renderer.removeStyle(this.navbar_menu.nativeElement, 'transform')
    this.renderer.setStyle(this.navbar_menu.nativeElement, 'transform', 'translateX(-100%)')
    this.renderer.removeClass(this.icon_nav_2.nativeElement, 'animate__bounceOut')
    this.renderer.addClass(this.icon_nav_2.nativeElement, 'animate__bounceIn')
    this.renderer.removeClass(this.div_close.nativeElement, 'animate__zoomIn');
    this.renderer.addClass(this.div_close.nativeElement, 'animate__zoomOut');
  }

}
