import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/shared/models/building.model';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

/* Services */
import { HouseService } from 'src/app/shared/services/house.service';
import { StateService } from 'src/app/shared/services/state.service';
/* Models */
import { City, State } from 'src/app/shared/models/state.model';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500 } }
  ]
})
export class DetailHouseComponent implements OnInit {
  /* URL PARAMS */
  private building_type: any;
  private id_guest: any;

  /* VARIABLES */
  buildings: Building[] = [];
  located_building!: Building;
  emailForm!: FormGroup;
  state!: State;
  city!: City;
  randomElements: Building[] = [];

  @ViewChild('icon_nav_2') icon_nav_2!: ElementRef
  @ViewChild('navbar_menu') navbar_menu!: ElementRef
  @ViewChild('div_close') div_close!: ElementRef

  constructor(private renderer: Renderer2, private _route: ActivatedRoute, private _stateService: StateService, private _houseService: HouseService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.building_type = this._route.snapshot.paramMap.get("type")?.toLocaleLowerCase();
    this.id_guest = this._route.snapshot.paramMap.get("id");
    console.log("param type_ ", this.building_type, this.id_guest);
    this.lookingBuilding();
    this.createEmailForm();
  }

  /*Navbar  Funtions */
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

  /* Function to look a building with url paramters recived to up in the UI */
  lookingBuilding() {
    this.buildings = this._houseService.getAllHouses()
    this.buildings.map(b => {
      //  console.log("Located B_ ", this.located_building);
      if (b.building_type == this.building_type && b.id == this.id_guest) {
        this.located_building = b;
        console.log("Located B_ ", this.located_building.agent);
        this.state = this._stateService.searchState(b.state);
        this.city = this._stateService.searchCity(b.city);
        console.log(this.state, this.city);

        // Obtener elementos del array aleatoriamente
        this.randomElements = this.getRandomElements(this.buildings)
        this.randomElements = this.randomElements.filter(r => r.building_type == b.building_type).slice(0, 2)
        console.log("random elemts_ ", this.randomElements);
      }
    })



  }

  /* Create form */
  createEmailForm() {
    this.emailForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      emailAddress: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  resetForm() {
    this.emailForm.reset();
  }

  /* Random element */
  getRandomElements(lista: any) {
    return [...lista].sort(() => (Math.random() > 0.5 ? 1 : -1))
  }

  /* event send emailJS */
  public sendEmail(e: Event) {
    console.log("enviado", e);

    e.preventDefault();
    emailjs.sendForm('service_vhi8cmw', 'template_8b3b7cf', e.target as HTMLFormElement, 'Hou-tE1xZUijpqWza')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    this.resetForm()
  }
}

