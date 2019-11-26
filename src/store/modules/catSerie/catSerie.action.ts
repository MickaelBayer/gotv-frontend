import { ICatSerie } from './../../../models/catSerie.model';
import {
  CatSerieActionTypes,
  GETALL_CATSERIE_REQUEST,
  GETALL_CATSERIE_SUCCESS,
  GETALL_CATSERIE_FAILURE
} from './catSerie.type';
import CatSerieService from '../../../services/api/entities/catSerie.service';
import { Dispatch } from 'redux';

function getAllCatSeriesResquest(): CatSerieActionTypes {
  return {
    type: GETALL_CATSERIE_REQUEST,
  }
}

function getAllCatSeriesSuccess(catSerie: ICatSerie[]): CatSerieActionTypes {
  return {
    type: GETALL_CATSERIE_SUCCESS,
    catSeries: catSerie
  }
}

function getAllCatSeriesFailure(error: string): CatSerieActionTypes {
  return {
    type: GETALL_CATSERIE_FAILURE,
    error: error,
  }
}

export const getAllCatSeries = () => {
  const catSerieService: CatSerieService = new CatSerieService();
  return (dispatch: Dispatch<CatSerieActionTypes>) => {
    dispatch(getAllCatSeriesResquest());
    return catSerieService.getAll().then(res => {
      dispatch(getAllCatSeriesSuccess(res));
    }).catch((error) => dispatch(getAllCatSeriesFailure(error.response.data)));
  }
}