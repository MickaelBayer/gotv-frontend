import { CatSerie } from './catSerie.model';
import { IVote } from './vote.model';

export interface ISerie {
    see_id: number;
    see_name: string;
    see_tmdb_id: number;
    see_original_country: string;
    see_first_air_date: string;
    see_original_lang: string;
    see_overview: string;
    see_poster_path: string;
    see_backdrop_path: string;
    see_average_mark: number;
    see_categories: CatSerie[];
    see_votes: IVote[];
}

export class Serie implements ISerie {

    readonly see_id: number;
    readonly see_name: string;
    readonly see_tmdb_id: number;
    readonly see_original_country: string;
    readonly see_first_air_date: string;
    readonly see_original_lang: string;
    readonly see_overview: string;
    readonly see_poster_path: string;
    readonly see_backdrop_path: string;
    readonly see_average_mark: number;
    readonly see_categories: CatSerie[];
    readonly see_votes: IVote[];

    constructor (
        see_id: number,
        see_name: string,
        see_tmdb_id: number,
        see_original_country: string,
        see_first_air_date: string,
        see_original_lang: string,
        see_overview: string,
        see_poster_path: string,
        see_backdrop_path: string,
        see_average_mark: number,
        see_categories: CatSerie[],
        see_votes: IVote[]
    ) {
        this.see_id = see_id;
        this.see_name = see_name;
        this.see_tmdb_id = see_tmdb_id;
        this.see_original_country = see_original_country;
        this.see_first_air_date = see_first_air_date;
        this.see_original_lang = see_original_lang;
        this.see_overview = see_overview;
        this.see_poster_path = see_poster_path;
        this.see_backdrop_path = see_backdrop_path;
        this.see_average_mark = see_average_mark;
        this.see_categories = see_categories;
        this.see_votes = see_votes;
    }
}