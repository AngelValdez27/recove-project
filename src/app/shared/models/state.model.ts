export interface Data {
    state: State[];
    city: City[];
}
export interface State {
    id?: number;
    state?: string;
}

export interface City {
    id?: number;
    city?: string;
    community?: string | null;
    id_state?: number;
}
