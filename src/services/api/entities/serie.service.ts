import ApiManagerService from "../api-manager.service";
import { ISerie, Serie } from "../../../models/serie.model";
import axios from "axios";

export default class SerieService extends ApiManagerService<Serie> {
  constructor() {
    super('series');
  }

  getBestSeries(): Promise<ISerie[]> {
    return axios.get<ISerie[]>(`${this.BASE_URL}/${this.endpoint}/top-series`).then(data => {
      return data.data;
    });
  }

  getSearchSeries(name: string): Promise<ISerie[]> {
    return axios.get<ISerie[]>(`${this.BASE_URL}/${this.endpoint}/search`, {params :{name: name}}).then(data => {
      return data.data;
    });
  }
}