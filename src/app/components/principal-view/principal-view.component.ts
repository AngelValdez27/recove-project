import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
/* models */
import { Building } from 'src/app/shared/models/building.model';
/* Services */
import { HouseService } from 'src/app/shared/services/house.service';
import { HelperService } from 'src/app/shared/services/helper.service';
/* swiper */
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, EffectCube, EffectFade } from 'swiper';
SwiperCore.use([Navigation, Pagination, EffectFade, A11y]);
/* Libreries */
import * as AOS from 'aos';
import { Helper } from 'src/app/shared/models/helper.model';


@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {
  @ViewChild('icon_nav_2') icon_nav_2!: ElementRef
  @ViewChild('navbar_menu') navbar_menu!: ElementRef
  @ViewChild('div_close') div_close!: ElementRef
  @ViewChild('wsp_container') wsp_container!: ElementRef
  @ViewChild('wsp_container_2') wsp_container_2!: ElementRef
  @ViewChild('contact_list') contact_list!: ElementRef;

  /* Variables */
  buildingsArr: Building[] = []
  newRecentBuildings: Building[] = []
  condos: Building[] = []
  helpers: Helper[] = []

  constructor(private renderer: Renderer2, private houseService: HouseService, private helperService: HelperService) { }
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });


  config: SwiperOptions = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: true,
    autoplay: {
      delay: 2000
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

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
    name: 'Casas',
    link: 'houses',
    image: '../../../assets/src/images/backgrounds/casabg.webp'
  }, {
    id: '18',
    name: 'Condominios',
    link: 'condos',
    image: '../../../assets/src/images/backgrounds/casabg.webp'

  },
  {
    id: '1',
    name: 'Terrenos',
    link: 'lands',
    image: '../../../assets/src/images/backgrounds/casabg.webp'

  }, {
    id: '5',
    name: 'Locales comerciales',
    link: 'shops',
    image: '../../../assets/src/images/backgrounds/casabg.webp'

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
    this.goToTop()
    this.getBuildings()
    this.getHelpers()

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
    this.slides[3] = {
      src: '../../../assets/src/images/RECOVE_RECOVE_B_T.webp',
    };
    this.slides[4] = {
      src: '../../../assets/src/images/RECOVE_RECOVE_N_T.webp',
    }
    this.slides[5] = {
      src: '../../../assets/src/images/RECOVE_RECOVE_B_T.webp',
    }
  }

  getBuildings() {
    this.buildingsArr = this.houseService.getAllStorage();
    this.buildingsArr = this.buildingsArr.filter(b => b.available)
    this.condos = this.houseService.getAllCondos()
    this.condos = this.condos.filter(c => c.available)
    // arrayTest = this.buildings
    //arrayTest = arrayTest.at(-6)
    //console.log("l ? ", arrayTest);
    for (let index = 0; index < this.buildingsArr.length; index++) {
      this.buildingsArr = this.buildingsArr.filter(b => b.building_type != "proyecto")
      if (index > 0 && index < 7) {
        this.newRecentBuildings.push(this.buildingsArr[this.buildingsArr.length - index])
      }

      /* if (index == 6) {
        this.buildingsArr = this.buildingsArr.reverse().slice(0, index)
      } */
    }
  }

  click() {
    console.log("click");

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

  /* whats app functions */
  showContactList() {
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__delay-3s')
    //this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__rotateIn')
    this.renderer.addClass(this.wsp_container.nativeElement, 'animate__rotateOut')
    this.renderer.setStyle(this.wsp_container.nativeElement, 'display', 'none')

    this.renderer.setStyle(this.wsp_container_2.nativeElement, 'display', 'flex')
    this.renderer.removeClass(this.wsp_container_2.nativeElement, 'animate__rotateOut')
    this.renderer.addClass(this.wsp_container_2.nativeElement, 'animate__rotateIn')

    this.renderer.setStyle(this.contact_list.nativeElement, 'display', 'block')
    //this.renderer.removeClass(this.contact_list.nativeElement, 'animate__delay-1s')
    this.renderer.removeClass(this.contact_list.nativeElement, 'animate__bounceOutDown')
    this.renderer.addClass(this.contact_list.nativeElement, 'animate__bounceInUp')
  }

  closeContactList() {
    //this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    //this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__bounceInUp')
    // this.renderer.removeStyle(this.wsp_container.nativeElement, 'display')
    this.renderer.addClass(this.contact_list.nativeElement, 'animate__bounceOutDown')
    this.renderer.removeClass(this.contact_list.nativeElement, 'animate__bounceInUp')
    // this.renderer.setProperty(this.contact_list.nativeElement, '--animate-duration', '1.3s')
    // this.renderer.addClass(this.contact_list.nativeElement, 'animate__delay-1s')
    this.renderer.setStyle(this.contact_list.nativeElement, 'display', 'none')
    //this.renderer.setStyle(this.wsp_container_2.nativeElement, 'display', 'none')

    this.renderer.removeClass(this.wsp_container_2.nativeElement, 'animate__rotateIn')
    this.renderer.addClass(this.wsp_container_2.nativeElement, 'animate__rotateOut')
    this.renderer.setStyle(this.wsp_container_2.nativeElement, 'display', 'none')

    this.renderer.setStyle(this.wsp_container.nativeElement, 'display', 'flex')
    this.renderer.removeClass(this.wsp_container.nativeElement, 'animate__rotateOut')
    this.renderer.addClass(this.wsp_container.nativeElement, 'animate__rotateIn')


  }

  goToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /* Get helpers */
  getHelpers() {
    this.helpers = this.helperService.getAllHelpers()
  }
}
