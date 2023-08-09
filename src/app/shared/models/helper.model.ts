import { City, State } from "./state.model";

export interface Helper {
    id: number,
    name: string,
    lastname_p: string,
    lastname_m: string,
    tiktok: string,
    whatsapp: string,
    facebook: string,
    instagram: string,
    twitter: string,
    city_id: number,
    state_id: number,
    image: string,
    city?: City,
    state?: State
}