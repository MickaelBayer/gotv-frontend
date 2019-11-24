import ApiManagerService from "../api-manager.service";
import { CatSerie } from "../../../models/catSerie.model";

export default class CatSerieService extends ApiManagerService<CatSerie> {
    constructor () {
        super('categories');
    }
}