import { Serie } from './serie.model';
import { User } from "./user.model";

export interface IVote {
    voe_id: number;
    voe_user: User;
    voe_serie: Serie;
    voe_comment: string;
    voe_mark: number;
    created_at: string;
}

export class Vote implements IVote {
    readonly voe_id: number;
    readonly voe_user: User;
    readonly voe_serie: Serie;
    readonly voe_comment: string;
    readonly voe_mark: number;
    readonly created_at: string;

    constructor(
        voe_id: number,
        voe_user: User,
        voe_serie: Serie,
        voe_comment: string,
        voe_mark: number,
        created_at: string
    ) {
        this.voe_id = voe_id;
        this.voe_user = voe_user;
        this.voe_serie = voe_serie;
        this.voe_comment = voe_comment;
        this.voe_mark = voe_mark;
        this.created_at = created_at;
    }
}