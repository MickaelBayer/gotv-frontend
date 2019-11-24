import { ICatSerie } from "../../../models/catSerie.model";
import { CatSerieActionTypes, GETALL_CATSERIE_SUCCESS } from "./catSerie.type";

const initialCatSerieState = {
  catSeries: [{
    cae_id: 1,
    cae_id_tmdb: 1,
    cae_label: "",
    cae_series: []
  }] as ICatSerie[],
  isLoading: true
}


export const catSerie = (state = initialCatSerieState, action: CatSerieActionTypes) => {
  switch (action.type) {
    case GETALL_CATSERIE_SUCCESS:
      return {
        ...state,
        catSeries: action.catSeries,
        isLoading: false
      }
    default:
      return state
  }
}
