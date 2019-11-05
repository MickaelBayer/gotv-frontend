import { Serie } from './serie.model';
import { User } from "./user.model";

export interface Vote {
    id: number;
    user: User;
    serie: Serie;
}