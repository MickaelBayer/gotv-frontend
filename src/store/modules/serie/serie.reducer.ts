import { ISerie } from './../../../models/serie.model';
import { SerieActionTypes, GETALL_SERIE_SUCCESS, GET_SERIE_SUCCESS } from "./serie.type";

const initialCatSerieState = {
  series: [{
    see_id: 1,
    see_name: "",
    see_tmdb_id: 1,
    see_poster_path: "",
    see_overview: "",
    see_backdrop_path: "",
    see_first_air_date: "",
    see_original_country: "",
    see_original_lang: "",
    see_categories: [],
    see_votes: []
  }] as ISerie[],
  isLoading: true
}


export const serie = (state = initialCatSerieState, action: SerieActionTypes) => {
  switch (action.type) {
    case GETALL_SERIE_SUCCESS:
      return {
        ...state,
        series: action.series,
        isLoading: false
      }
    case GET_SERIE_SUCCESS:
      return {
        ...state,
        serie: state.series[action.serie.see_id],
        isLoading: false
      }
    default:
      return state
  }
}
