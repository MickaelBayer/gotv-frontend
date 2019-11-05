import ApiManagerService from "../api-manager.service";
import { Serie } from "../../../models/serie.model";

export default class SerieService extends ApiManagerService<Serie> {
  constructor() {
    super('series');
  }
}