import { Entity4 } from "./entity4";

export interface Rest1 {
    _embedded: {
        entity4s: Entity4[]
        },
        _links: {
        self: {
        href: string;
        },
        profile: {
        href: string;
        }
        },
        page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
        }

}