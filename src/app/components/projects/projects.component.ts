import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
/* Services */
import { HouseService } from 'src/app/shared/services/house.service';
import { StateService } from 'src/app/shared/services/state.service';
import { HelperService } from 'src/app/shared/services/helper.service';
/* Models */
import { Building } from 'src/app/shared/models/building.model';
import { City, State } from 'src/app/shared/models/state.model';
/* Libreries */
import * as AOS from 'aos';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, EffectCube, EffectFade, Keyboard } from 'swiper';
import { Helper } from 'src/app/shared/models/helper.model';
SwiperCore.use([Navigation, Pagination, EffectFade, A11y, Keyboard]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  /* Variables */
  projects: Building[] = []
  project!: Building;
  city!: City;
  state!: State;
  helpers: Helper[] = []


  @ViewChild('icon_nav_2') icon_nav_2!: ElementRef
  @ViewChild('navbar_menu') navbar_menu!: ElementRef
  @ViewChild('div_close') div_close!: ElementRef
  @ViewChild('selectTypeDom') selectTypeDom!: ElementRef
  @ViewChild('wsp_container') wsp_container!: ElementRef
  @ViewChild('wsp_container_2') wsp_container_2!: ElementRef
  @ViewChild('contact_list') contact_list!: ElementRef;

  config2: SwiperOptions = {
    loop: true,
    /* slidesPerView: 1,
    spaceBetween: 10, */
    navigation: true,
    autoplay: {
      delay: 2000
    },
    pagination: { clickable: true },
    /*  scrollbar: { draggable: true }, */
  };




  constructor(private renderer: Renderer2, private houseService: HouseService,
    private stateService: StateService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.goToTop()
    this.getBuildings()
    this.searchProjectById()
    this.getHelpers()
  }

  getBuildings() {
    this.projects = this.houseService.getAllProjects();
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

  /* Filter functions */

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

  /* Projects functions */
  searchProjectById(id?: number) {
    this.projects.map(p => {
      if (p.id == 12) {
        this.project = p
        this.state = this.stateService.searchState(p.state);
        this.city = this.stateService.searchCity(p.city);
      }
    })
  }
  /* Get helpers */
  getHelpers() {
    this.helpers = this.helperService.getAllHelpers()
  }

  /* automatic slide */
  automaticNextControl(swiper: Swiper) {
    const seconds = interval(3000);
    seconds.subscribe(() => {
      swiper.slideNext(500);
    });
  }
}
