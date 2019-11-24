import { ISerie } from "../../../models/serie.model";

export const GETALL_SERIE_REQUEST = "GETALL_SERIE_REQUEST";
export const GETALL_SERIE_SUCCESS = "GETALL_SERIE_SUCCESS";
export const GETALL_SERIE_FAILURE = "GETALL_SERIE_FAILURE";

export const GET_SERIE_REQUEST = "GET_SERIE_REQUEST";
export const GET_SERIE_SUCCESS = "GET_SERIE_SUCCESS";
export const GET_SERIE_FAILURE = "GET_SERIE_FAILURE";

interface GetAllSerieSuccessAction {
  type: typeof GETALL_SERIE_SUCCESS;
  series: ISerie[];
}

interface GetAllSerieRequestAction {
  type: typeof GETALL_SERIE_REQUEST;
}

interface GetAllSerieFailureAction {
  type: typeof GETALL_SERIE_FAILURE;
  error: string;
}

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

export type SerieActionTypes = GetAllSerieSuccessAction | GetAllSerieRequestAction | GetAllSerieFailureAction | GetSerieSuccessAction | GetSerieRequestAction | GetSerieFailureAction;