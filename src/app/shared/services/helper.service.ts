import { Injectable } from '@angular/core';
import { Helper } from '../models/helper.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  helpers!: Helper[]

  constructor() {
    this.helpers = [{
      id: 1,
      name: "Ayari Seañez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528711164914",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 7,
      state_id: 1,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 2,
      name: "Luisa Seañez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528711164914",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 6,
      state_id: 1,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 3,
      name: "Karla Seañez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528711164914",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 7,
      state_id: 1,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 4,
      name: "Jessica Seañez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528711164914",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 3,
      state_id: 2,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 5,
      name: "Esther Seañez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528711164914",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 4,
      state_id: 2,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    {
      id: 6,
      name: "Marina Seañez",
      lastname_p: "",
      lastname_m: "",
      tiktok: "",
      whatsapp: "528711164914",
      facebook: "https://www.facebook.com/AlcanceTorreon/",
      instagram: "https://www.instagram.com/p/Cj6UV88vs3B/",
      twitter: "",
      city_id: 5,
      state_id: 2,
      image: "../../../assets/src/images/team/ayari2.webp"
    },
    ]
  }

  getAllHelpers() {
    return this.helpers;
  }
}
