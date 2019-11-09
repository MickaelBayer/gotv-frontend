import { Serie } from './serie.model';
export interface CatSerie {
    cae_id: number;
    cae_id_tmdb: number;
    cae_label: string;
    cae_series: Serie[];
}