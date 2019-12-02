import { ISerieCast } from './../../../models/serieCast.model';
import ApiManagerService from "../api-manager.service";
import Axios from "axios";

export default class SerieCastService extends ApiManagerService<ISerieCast> {
    constructor() {
        super('tmdb');
    }

    public getCasts(id: number): Promise<ISerieCast[]> {
        return Axios.get<ISerieCast[]>(`${this.BASE_URL}/${this.endpoint}/${id}/casts`).then(res => {
            return res.data;
        })
    }
}