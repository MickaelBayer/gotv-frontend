import {ISerie} from '../../../models/serie.model';
import {GET_SERIES_SUCCESS, SEARCH_SERIE_SUCCESS, SerieActionTypes} from "./serie.type";
import {IVote} from '../../../models/vote.model';
import {ICatSerie} from '../../../models/catSerie.model';

const initialSeriesState = {
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
    see_average_mark: 0,
    see_categories: [] as ICatSerie[],
    see_votes: [] as IVote[]
  }] as ISerie[],
  isLoading: true
}


const initialSeriesStateSearch = {
  searchSeries: [{
    see_id: 1,
    see_name: "",
    see_tmdb_id: 1,
    see_poster_path: "",
    see_overview: "",
    see_backdrop_path: "",
    see_first_air_date: "",
    see_original_country: "",
    see_original_lang: "",
    see_average_mark: 0,
    see_categories: [] as ICatSerie[],
    see_votes: [] as IVote[]
  }] as ISerie[],
  isLoading: true
}

export const series = (state = initialSeriesState, action: SerieActionTypes) => {
  switch (action.type) {
    case GET_SERIES_SUCCESS:

      return {
        ...state,
        series: action.series,
        isLoading: false
      }
    default:
      return state
  }
}

export const searchSeries = (state = initialSeriesStateSearch, action: SerieActionTypes) => {
  switch (action.type) {
    case SEARCH_SERIE_SUCCESS:
      return {
        ...state,
        searchSeries: action.series,
        isLoading: false
      }
    default:
      return state
  }
}
