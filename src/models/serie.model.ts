import { CatSerie } from './catSerie.model';
import { PlatformSerie } from "./platformSerie.model";

export interface Serie {
    id: number;
    name: string;
    tmdb_id: number;
    original_country: string;
    first_air_date: string;
    original_lang: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    categories: CatSerie[];
    platform: PlatformSerie[];
}