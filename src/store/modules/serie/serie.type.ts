import { ISerie } from "../../../models/serie.model";
import { IVote } from "../../../models/vote.model";

export const GET_SERIE_REQUEST = "GET_SERIE_REQUEST";
export const GET_SERIE_SUCCESS = "GET_SERIE_SUCCESS";
export const GET_SERIE_FAILURE = "GET_SERIE_FAILURE";

export const GET_SERIES_REQUEST = "GET_SERIES_REQUEST";
export const GET_SERIES_SUCCESS = "GET_SERIES_SUCCESS";
export const GET_SERIES_FAILURE = "GET_SERIES_FAILURE";

export const POST_SERIEVOTE_REQUEST = "POST_SERIEVOTE_REQUEST";
export const POST_SERIEVOTE_SUCCESS = "POST_SERIEVOTE_SUCCESS";
export const POST_SERIEVOTE_FAILURE = "POST_SERIEVOTE_FAILURE";


export const SEARCH_SERIE_FAILURE = "SEARCH_SERIE_FAILURE";
export const SEARCH_SERIE_SUCCESS = "SEARCH_SERIE_SUCCESS";
export const SEARCH_SERIE_REQUEST = "SEARCH_SERIE_REQUEST";

interface GetSerieSuccessAction {
  type: typeof GET_SERIE_SUCCESS;
  serie: ISerie;
}

interface GetSerieRequestAction {
  type: typeof GET_SERIE_REQUEST;
}

interface GetSerieFailureAction {
  type: typeof GET_SERIE_FAILURE;
  error: string;
}

interface GetSeriesSuccessAction {
  type: typeof GET_SERIES_SUCCESS;
  series: ISerie[];
}

interface GetSeriesRequestAction {
  type: typeof GET_SERIES_REQUEST;
}

interface GetSeriesFailureAction {
  type: typeof GET_SERIES_FAILURE;
  error: string;
}


interface PostSerieVoteSuccessAction {
  type: typeof POST_SERIEVOTE_SUCCESS;
  vote: IVote;
}

interface PostSerieVoteRequestAction {
  type: typeof POST_SERIEVOTE_REQUEST;
}

interface PostSerieVoteFailureAction {
  type: typeof POST_SERIEVOTE_FAILURE;
  error: string;
}

interface SearchSerieFailureAction {
  type: typeof SEARCH_SERIE_FAILURE;
  error: string;
}
interface SearchSerieSuccessAction {
  type: typeof SEARCH_SERIE_SUCCESS;
  series: ISerie[];
}
interface SearchSerieRequestAction {
  type: typeof SEARCH_SERIE_REQUEST;
}

export type SerieActionTypes = SearchSerieFailureAction | SearchSerieSuccessAction | SearchSerieRequestAction | GetSerieSuccessAction | GetSerieRequestAction | GetSerieFailureAction | PostSerieVoteSuccessAction | PostSerieVoteRequestAction | PostSerieVoteFailureAction | GetSeriesSuccessAction | GetSeriesRequestAction | GetSeriesFailureAction;
