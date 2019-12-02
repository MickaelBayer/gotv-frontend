import { ISerie } from '../../../models/serie.model';
import { SerieActionTypes, GET_SERIES_SUCCESS, POST_SERIEVOTE_SUCCESS } from "./serie.type";
import { IVote } from '../../../models/vote.model';
import { ICatSerie } from '../../../models/catSerie.model';

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


export const series = (state = initialSeriesState, action: SerieActionTypes) => {
  switch (action.type) {
    case GET_SERIES_SUCCESS:

      return {
        ...state,
        series: action.series,
        isLoading: false
      }
    // case POST_SERIEVOTE_SUCCESS:
    //   const votes = [...state.series.see_votes];
    //   votes.push(action.vote);
    //   return {
    //     ...state,
    //     serie: state.series,
    //     isLoading: false
    //   }
    default:
      return state
  }
}
