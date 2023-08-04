export interface Data {
    building: Building[];
}
export interface Building {
    id?: number;
    identifier?: string;
    name?: string;
    ubication?: string;
    price?: number;
    baths?: number;
    rooms?: number;
    garage?: number;
    description?: string;
    area_total?: number;
    area_builded?: number;
    colony: string;
    postal_code?: number;
    state: number;
    city: number;
    agent?: string | null;
    image_principal?: string;
    images?: {
        src: string,
    }[];
    on_sale?: boolean;
    available?: boolean;
    community?: boolean;
    building_type?: string;
    link_map: string;
}
