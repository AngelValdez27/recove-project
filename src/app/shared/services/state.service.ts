import { Injectable } from '@angular/core';
import { State, City } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private states: State[] = [];
  private cities: City[] = [];
  private state!: State;
  private city!: City;
  constructor() {
    this.states = [{
      id: 1,
      state: "Sinaloa"
    },
    {
      id: 2,
      state: "Coahuila"
    },
    {
      id: 3,
      state: "Chihuahua"
    },
    {
      id: 4,
      state: "Durango"
    },
    {
      id: 5,
      state: "Nuevo León"
    }
    ];

    this.cities = [{
      id: 1,
      city: "Aldama",
      community: "",
      id_state: 3
    },
    {
      id: 2,
      city: "Ciudad Juárez",
      community: "",
      id_state: 3
    },
    {
      id: 3,
      city: "Comarca Lagunera",
      community: "Torreón",
      id_state: 2
    },
    {
      id: 4,
      city: "Comarca Lagunera",
      community: "Lerdo",
      id_state: 2
    },
    {
      id: 5,
      city: "Comarca Lagunera",
      community: "Gómez Palacio",
      id_state: 2
    },
    {
      id: 6,
      city: "Mazatlán",
      community: "",
      id_state: 1
    },
    {
      id: 7,
      city: "Mazatlán 2",
      community: "",
      id_state: 1
    },
    {
      id: 8,
      city: "Saltillo",
      community: "",
      id_state: 2
    },
    {
      id: 9,
      city: "Monterrey",
      community: "",
      id_state: 5
    },
    {
      id: 10,
      city: "Chihuahua",
      community: "",
      id_state: 3
    },
    ];
  }

  getAllStates() {
    return this.states;
  }

  getAllCities() {
    return this.cities;
  }

  searchState(id: number) {
    this.states.map(s => {
      if (id == s.id) {
        this.state = s
      }
    })
    return this.state
  }

  searchCity(id: number) {
    this.cities.map(c => {
      if (id == c.id) {
        this.city = c
      }
    })
    return this.city
  }

}
