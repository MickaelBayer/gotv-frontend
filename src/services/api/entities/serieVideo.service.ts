import ApiManagerService from "../api-manager.service";
import { ISerieVideo, SerieVideo } from "../../../models/serieVideo.model";
import Axios from "axios";

export default class SerieVideoService extends ApiManagerService<ISerieVideo> {
    constructor () {
        super('tmdb');
    }

    public getVideos(id: number): Promise<SerieVideo[]> {
        return Axios.get<SerieVideo[]>(`${this.BASE_URL}/${this.endpoint}/${id}/videos`).then(res => {
            return res.data;
        })
    }
}