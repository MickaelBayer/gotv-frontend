import { Serie } from './serie.model';

export interface PlatformSerie {
    id: number;
    series: Serie[];
    events: Event[];
}