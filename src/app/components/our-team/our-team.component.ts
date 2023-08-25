import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild
} from '@angular/core';
/* Models */
import { Helper } from 'src/app/shared/models/helper.model';
import { State } from 'src/app/shared/models/state.model';
import { City } from 'src/app/shared/models/state.model';
/* Services */
import { HelperService } from 'src/app/shared/services/helper.service';
import { StateService } from 'src/app/shared/services/state.service';

/* Libreries */
import * as AOS from 'aos';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper, EffectCube, EffectFade, Keyboard } from 'swiper';
import { interval } from 'rxjs';
SwiperCore.use([Navigation, Pagination, EffectFade, A11y, Keyboard]);

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  @ViewChild('icon_nav_2') icon_nav_2!: ElementRef
  @ViewChild('navbar_menu') navbar_menu!: ElementRef
  @ViewChild('div_close') div_close!: ElementRef
  @ViewChild('wsp_container') wsp_container!: ElementRef
  @ViewChild('wsp_container_2') wsp_container_2!: ElementRef
  @ViewChild('contact_list') contact_list!: ElementRef;

  /* Variables */
  helpers!: Helper[]
  city!: City;
  state!: State;

  /* Company values */
  values = [{
    value: "Empatía",
    contain: " Ofrecer productos superiores que satisfagan las necesidades reales y tengan un valor duradero. Nos interesa resolver los problemas de los clientes sin comprometer la ética o la integridad en nombre de las utilidades."
  },
  {
    value: "Agresividad",
    contain: "Nos planteamos metas agresivas y nos esforzamos por cumplirlas. Reconocemos que ésta es una época única en que nuestros productos cambiarán la forma en que la gente trabaja y vive. "
  },
  {
    value: "Innovación y visión",
    contain: "La innovación y la visión constituyen a nuestra empresa al proveer servicios que son necesarios. Aceptamos el riesgo inherente de seguir nuestra visión y trabajamos para desarrollar servicios líderes."
  },
  {
    value: "Desempeño individual",
    contain: "Esperamos un compromiso individual y un desempeño por encima del estándar de la industria. Sólo así podemos obtener ganancias que permitan la inversión en otros objetivos corporativos."
  },
  {
    value: "Espíritu de equipo",
    contain: "El trabajo en equipo es esencial para el éxito de Alta Gama. Se alienta a que los individuos interactúen en todos los niveles gerenciales, compartiendo ideas y sugerencias para mejorar la eficiencia para contribuir a la calidad de vida."
  },
  {
    value: "Calidad",
    contain: "Nos importa lo que hacemos. Ponemos un nivel de calidad, desempeño y valor que nos merecen el respeto y la lealtad de nuestros clientes. "
  },
  {
    value: "Recompensa individual",
    contain: "Reconocemos la contribución de cada persona al éxito de Alta Gama y compartimos los beneficios financieros que provienen del alto desempeño. Reconocemos que las recompensas deben ser psicológicas y también financieras, y luchamos por tener un ambiente en que cada individuo pueda compartir la aventura y la emoción de trabajar en Alta Gama."
  },
  {
    value: "Gran dirección",
    contain: "Las actitudes de los gerentes hacia la gente son de suma importancia. Los empleados deben confiar en los motivos y la integridad de sus supervisores. Es responsabilidad de los directivos crear un ambiente productivo en que los valores de Alta Gama florezcan. Estos valores se convirtieron en parte de la comunicación cotidiana"
  },
  {
    value: "Contribución social",
    contain: "Debemos hacer una contribución social positiva. Como ciudadano corporativo, debemos constituir un valor en lo económico, en lo intelectual y en lo social dentro de las comunidades en que operamos. Pero además esperamos convertir a este mundo en un mejor lugar para vivir. Entragamos productos aptos para humanos."
  }
  ]

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

  config2: SwiperOptions = {
    loop: true,
    /* slidesPerView: 1,
    spaceBetween: 10, */
    navigation: true,
    pagination: { clickable: true },
    /*  scrollbar: { draggable: true }, */
  };


  constructor(private renderer: Renderer2, private helperService: HelperService, private stateService: StateService) { }

  ngOnInit(): void {
    this.goToTop()
    AOS.init()
    window.addEventListener('load', AOS.refresh)

    /* Get helpers of helper service */
    this.helpers = this.helperService.getAllHelpers();
    /* Look a helper state and city */
    this.helpers.map(h => {
      h.state = this.stateService.searchState(h.state_id)
      h.city = this.stateService.searchCity(h.city_id)
      console.log("wtf ", h);

    })

  }

  /* Navbar functions */
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
      //   left: 0,
      behavior: 'smooth',
    });
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
