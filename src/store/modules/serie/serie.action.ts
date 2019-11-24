import { ISerie } from '../../../models/serie.model';
import {
  SerieActionTypes,
  GETALL_SERIE_REQUEST,
  GETALL_SERIE_SUCCESS,
  GETALL_SERIE_FAILURE,
  GET_SERIE_REQUEST,
  GET_SERIE_SUCCESS,
  GET_SERIE_FAILURE
} from './serie.type';
import { Dispatch } from 'redux';
import SerieService from '../../../services/api/entities/serie.service';

function getAllSeriesResquest(): SerieActionTypes {
  return {
    type: GETALL_SERIE_REQUEST,
  }
}

function getAllSeriesSuccess(series: ISerie[]): SerieActionTypes {
  return {
    type: GETALL_SERIE_SUCCESS,
    series: series
  }
}

function getAllSeriesFailure(error: string): SerieActionTypes {
  return {
    type: GETALL_SERIE_FAILURE,
    error: error,
  }
}

function getSerieResquest(): SerieActionTypes {
  return {
    type: GET_SERIE_REQUEST,
  }
}

function getSerieSuccess(serie: ISerie): SerieActionTypes {
  return {
    type: GET_SERIE_SUCCESS,
    serie: serie
  }
}

function getSerieFailure(error: string): SerieActionTypes {
  return {
    type: GET_SERIE_FAILURE,
    error: error,
  }
}

export const getAllSeries = () => {
  const serieService: SerieService = new SerieService();
  return (dispatch: Dispatch<SerieActionTypes>) => {
    dispatch(getAllSeriesResquest());
    return serieService.getAll().then(res => {
      dispatch(getAllSeriesSuccess(res));
    }).catch((error) => dispatch(getAllSeriesFailure(error)));
  }
}

export const getSerie = (id: number) => {
  const serieService: SerieService = new SerieService();
  return (dispatch: Dispatch<SerieActionTypes>) => {
    dispatch(getSerieResquest());
    return serieService.get(id).then(res => {
      console.log(res);
      dispatch(getSerieSuccess(res));
    }).catch((error) => dispatch(getSerieFailure(error)));
  }
}