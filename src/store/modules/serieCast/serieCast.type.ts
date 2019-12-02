import { ISerieCast } from './../../../models/serieCast.model';

export const GET_SERIECAST_REQUEST = "GET_SERIECAST_REQUEST";
export const GET_SERIECAST_SUCCESS = "GET_SERIECAST_SUCCESS";
export const GET_SERIECAST_FAILURE = "GET_SERIECAST_FAILURE";

interface GetSerieCastsSuccessAction {
  type: typeof GET_SERIECAST_SUCCESS;
  serieCasts: ISerieCast[];
}

interface GetSerieCastsRequestAction {
  type: typeof GET_SERIECAST_REQUEST;
}

interface GetSerieCastsFailureAction {
  type: typeof GET_SERIECAST_FAILURE;
  error: string;
}

export type SerieCastActionTypes = GetSerieCastsSuccessAction | GetSerieCastsRequestAction | GetSerieCastsFailureAction;