import { Serie } from './serie.model';
export interface ICatSerie {
    cae_id: number;
    cae_id_tmdb: number;
    cae_label: string;
    cae_series: Serie[];
}

export class CatSerie implements ICatSerie {
    readonly cae_id: number;
    readonly cae_id_tmdb: number;
    readonly cae_label: string;
    readonly cae_series: Serie[];

    // @ts-ignore
    constructor ();
    constructor (cae_id: number, cae_id_tmdb: number, cae_label: string, cae_series: Serie[]) {
        this.cae_id = cae_id;
        this.cae_id_tmdb = cae_id_tmdb;
        this.cae_label = cae_label;
        this.cae_series = cae_series;
    }

}