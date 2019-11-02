import { Serie } from './serie.model';
export interface CatSerie {
    id: number;
    id_tmdb: number;
    label: string;
    series: Serie[];
}