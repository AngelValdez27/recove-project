import { Injectable } from '@angular/core';
import { Building } from '../models/building.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houses!: Building[];

  constructor() {
    this.houses = [
      {
        id: 1,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín',
        ubication: 'Torreón Coahuila',
        price: 1250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 2,
        city: 3,
        agent: 1,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: false,
        available: false,
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 2,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 2',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 1,
        city: 6,
        agent: 2,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: false,
        available: true,
        community: false,
        building_type: "condominio",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 3,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 3',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 1,
        city: 7,
        agent: 3,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_B_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: false,
        building_type: "casa",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 4,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 4',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 3,
        city: 1,
        agent: 4,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_B_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: false,
        building_type: "local",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 5,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 5',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 3,
        city: 2,
        agent: 5,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: false,
        building_type: "condominio",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 6,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 6',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 2,
        city: 3,
        agent: 6,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: true,
        building_type: "condominio",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 7,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 7',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 2,
        city: 4,
        agent: 1,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: false,
        available: true,
        community: true,
        building_type: "condominio",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 8,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 8',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 2,
        city: 5,
        agent: 2,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: true,
        building_type: "casa",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 9,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 9',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 2,
        city: 3,
        agent: 3,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: true,
        building_type: "casa",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 10,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 10',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "sta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 2,
        city: 4,
        agent: 4,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: true,
        building_type: "casa",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      },
      {
        id: 11,
        identifier: 'C001',
        name: 'Casa en Torreón Jardín 11',
        ubication: 'Torreón Coahuila',
        price: 2250000,
        baths: 2,
        rooms: 8,
        garage: 1,
        description: "Esta impresionante casa de lujo ofrece una experiencia de vida inigualable, con sus amplios espacios. Se encuentra ubicada en el prestigioso Fraccionamiento Torreón Jardín. La casa cuenta con una hermosa arquitectura y detalles d e diseño elegantes. La iluminación natural y los techos altos crean un ambiente acogedor.",
        area_total: 750,
        area_builded: 460,
        colony: "Torreón Jardín",
        postal_code: 27569,
        state: 2,
        city: 3,
        agent: 5,
        image_principal: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp",
        images: [
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          },
          {
            src: "../../../assets/src/images/RECOVE_RECOVE_N_T.webp"
          }
        ],
        on_sale: true,
        available: true,
        community: true,
        building_type: "casa",
        link_map: "https://goo.gl/maps/sX69ESwoGeQjPimv6"
      }
    ];
  }

  getAllStorage() {
    return this.houses
  }
  getAllHouses() {
    return this.houses.filter(h => h.building_type == "casa")
  }

  getAllCondos() {
    return this.houses.filter(h => h.building_type == "condominio")
  }

  getAllShops() {
    return this.houses.filter(h => h.building_type == "local")
  }

  getAllLands() {
    return this.houses.filter(h => h.building_type == "terreno")
  }
}
