import { ICatSerie } from './../../../models/catSerie.model';

export const GETALL_CATSERIE_REQUEST = "GETALL_CATSERIE_REQUEST";
export const GETALL_CATSERIE_SUCCESS = "GETALL_CATSERIE_SUCCESS";
export const GETALL_CATSERIE_FAILURE = "GETALL_CATSERIE_FAILURE";

interface GetAllCatSerieSuccessAction {
  type: typeof GETALL_CATSERIE_SUCCESS;
  catSeries: ICatSerie[];
}

interface GetAllCatSerieRequestAction {
  type: typeof GETALL_CATSERIE_REQUEST;
}

interface GetAllCatSerieFailureAction {
  type: typeof GETALL_CATSERIE_FAILURE;
  error: string;
}

export type CatSerieActionTypes = GetAllCatSerieSuccessAction | GetAllCatSerieRequestAction | GetAllCatSerieFailureAction;