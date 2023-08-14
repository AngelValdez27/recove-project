import { Injectable } from '@angular/core';
import { Helper } from '../models/helper.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  helpers!: Helper[]
  /* id estados */
  /* 
  1 Sinaloa
  2 Coahuila
  3 Chihuahua
  4 Durango
  5 Nuevo León

  CIUDADES
  1 Aladama
  2 Cd. Juárez
  3 Torreón
  4 Lerdo
  5 Gómez Palacio
  6 Mazatlán
  7 NA
  8 Saltillo
  9 Monterrey
  10Chihuahua
  */

  constructor() {
    this.helpers = [{
      id: 1,
      name: "Ayari Seañez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528711187926",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 3,
      state_id: 2,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 2,
      name: "Cristihan Viggers",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "526183100795",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 5,
      state_id: 4,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 3,
      name: "Alexandra Lozoya",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "526144587984",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 10,
      state_id: 3,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 4,
      name: "María Tesesa Alvarado",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528187063769",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 9,
      state_id: 5,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 5,
      name: "Adriana Gutiérrez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "526691592946",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 6,
      state_id: 1,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 6,
      name: "Martín Zermeño",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "526145373877",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 8,
      state_id: 2,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    ]
  }

  getAllHelpers() {
    return this.helpers;
  }
}
