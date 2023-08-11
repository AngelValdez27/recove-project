import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
/* Services */
import { HouseService } from 'src/app/shared/services/house.service';
import { StateService } from 'src/app/shared/services/state.service';
import { HelperService } from 'src/app/shared/services/helper.service';
/* Models */
import { Building, Data } from 'src/app/shared/models/building.model';
import { City, State } from 'src/app/shared/models/state.model';
/* Libreries */
import * as AOS from 'aos';
import { Helper } from 'src/app/shared/models/helper.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  /* Variables */
  buildings: Building[] = []
  slicedArrBuildings: Building[] = [];
  stateBuildings: Building[] = [];
  cityBuildings: Building[] = [];
  notFound = false
  notFoundItems = false

  states!: State[];
  cities!: City[];
  specialCities!: City[];
  selectorCity: boolean = true;
  selectorType: boolean = true;
  buttonActive: boolean = true;
  typeSelected: boolean = true;
  selectorCitySpecial: boolean = true;
  speciaCityId!: number;
  helpers: Helper[] = []

  types = [{
    id: '1',
    name: 'Venta',
    state: true
  },
  {
    id: '2',
    name: 'Renta',
    state: false
  }]


  @ViewChild('icon_nav_2') icon_nav_2!: ElementRef
  @ViewChild('navbar_menu') navbar_menu!: ElementRef
  @ViewChild('div_close') div_close!: ElementRef
  @ViewChild('selectTypeDom') selectTypeDom!: ElementRef
  @ViewChild('wsp_container') wsp_container!: ElementRef
  @ViewChild('wsp_container_2') wsp_container_2!: ElementRef
  @ViewChild('contact_list') contact_list!: ElementRef;



  constructor(private renderer: Renderer2, private houseService: HouseService,
    private stateService: StateService, private helperService: HelperService) { }

  ngOnInit(): void {
    this.goToTop()
    this.states = this.stateService.getAllStates();
    this.cities = this.stateService.getAllCities();
    this.getBuildings()
    this.getHelpers()
  }

  getBuildings() {
    this.buildings = this.houseService.getAllHouses();
    this.buildings = this.buildings.filter(b => b.available)

    this.slicedArrBuildings = this.buildings.slice(0, 9)
    if (this.buildings.length == 0) {
      this.notFound = true
      console.log(this.notFound);
    } else {
      /* las card de los items de muestran si existe mas de 0  en el array, ayuda cuando el value del selecto es todos (0) */
      this.notFoundItems = false
    }
    console.log("getBuildings_ ", this.buildings);
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

  pageChanged(event: PageChangedEvent): void {
    /* Captura el primer item restando 1 a la pagina actual (2) y multiplica por los items por pagina (10), cada pagina tiene 10 items (ex: 1*10) */
    const startItem = (event.page - 1) * event.itemsPerPage;
    /* Captura el último item multiplicando la página actual por la cantidad e items por página (ex: 2*10) */
    const endItem = event.page * event.itemsPerPage;
    /* Construye el nuevo array partiendo desde el primer item al último (ex:slice(10,20)) */
    this.slicedArrBuildings = this.buildings.slice(startItem, endItem);
  }

  /* Filter functions */

  searchCity(event: any) {
    this.selectorCitySpecial = true;
    this.selectorType = true
    this.buttonActive = true
    this.cities = this.stateService.getAllCities();
    //console.log(this.cities);
    console.log(event.value);


    if (event.value == 0) {
      this.cities = []
      this.getBuildings()
      // this.slicedArrBuildings = this.buildings
      console.log("value 0_", this.slicedArrBuildings);
    }

    if (event.value != 0) {
      this.cities = this.cities.filter(c => c.id_state == event.value)
      // console.log("cities ", this.cities);

      if (event.value == 2) {
        this.specialCities = this.cities.filter(c => c.id_state == 2)
        this.cities = this.cities.slice(0, 1)
        //console.log("sliced cities_ ", this.cities);
      }
      this.selectorCity = false
      //console.log("Event search city_ ", this.cities, event.value);
      this.getBuildings()
      this.slicedArrBuildings = this.slicedArrBuildings.filter(b => b.state == event.value)
      this.stateBuildings = this.slicedArrBuildings
      /* declara los elementos en la pagina */
      this.buildings = this.slicedArrBuildings
      console.log("filter bui by sta_ ", this.slicedArrBuildings);
    }
  }

  selectCity(event: any) {
    let id_city = event.value
    this.selectorCitySpecial = true;
    this.selectorType = true
    this.buttonActive = true
    this.renderer.setProperty(this.selectTypeDom.nativeElement, 'value', '0')
    // console.log("Event select city_ ", event.value);
    //this.getBuildings()
    this.slicedArrBuildings = this.stateBuildings.filter(b => b.city == id_city)
    this.cityBuildings = this.slicedArrBuildings;
    this.selectorType = false

    if (id_city == 3 || id_city == 4 || id_city == 5) {
      this.slicedArrBuildings = this.stateBuildings.filter(b => b.community == true).sort((a, b) => (a.city > b.city) ? -1 : 1)
      this.cityBuildings = this.slicedArrBuildings;
      //  console.log("sorted_ ", this.slicedArrBuildings);
      this.selectorCitySpecial = false;
    }
    this.selectorType = false
    // console.log("filter bui by sta_ ", this.slicedArrBuildings);
  }

  selectSpecialCity(event: any) {
    this.speciaCityId = event.value
    //this.slicedArrBuildings = this.cityBuildings.filter(b => b.city == event.value)
  }

  selectType(event: any) {
    this.typeSelected = JSON.parse(event.value)
    // console.log("on sale ?_ ", this.typeSelected);
    console.log("event type selected_ ", this.slicedArrBuildings);
    console.log("citi buildings_ 1 ", this.cityBuildings);

    this.buttonActive = false
  }

  searchBuildings() {

    if (this.speciaCityId != undefined) {
      this.slicedArrBuildings = this.cityBuildings.filter(b => b.on_sale == this.typeSelected && b.city == this.speciaCityId)
      this.buildings = this.slicedArrBuildings
      console.log("event search spc_ ", this.slicedArrBuildings);

    }
    if (!this.speciaCityId) {
      // console.log("citi buildings_ 2 ", this.cityBuildings);
      this.slicedArrBuildings = this.cityBuildings.filter(b => b.on_sale == this.typeSelected)
      this.buildings = this.slicedArrBuildings
      console.log("event search_ ", this.slicedArrBuildings);
      console.log("citi buildings_ 3 ", this.cityBuildings);
    }
    /* storage exist */
    if (this.slicedArrBuildings.length == 0) {
      this.notFoundItems = true
      console.log(this.notFoundItems);
    } else {
      this.notFoundItems = false

    }
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
      //   left: 0,
      behavior: 'smooth',
    });
  }
  /* Get helpers */
  getHelpers() {
    this.helpers = this.helperService.getAllHelpers()
  }

}
