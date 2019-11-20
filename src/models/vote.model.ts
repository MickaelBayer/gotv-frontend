import { Serie } from './serie.model';
import { User } from "./user.model";

export interface Vote {
    voe_id: number;
    voe_user: User;
    voe_serie: Serie;
    voe_comment: string;
    voe_mark: number;
    created_at: string;
}