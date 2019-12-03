import {toast} from 'react-toastify';
import {ISerie} from '../../../models/serie.model';
import {
  GET_SERIE_FAILURE,
  GET_SERIE_REQUEST,
  GET_SERIE_SUCCESS,
  GET_SERIES_FAILURE,
  GET_SERIES_REQUEST,
  GET_SERIES_SUCCESS,
  POST_SERIEVOTE_FAILURE,
  POST_SERIEVOTE_REQUEST,
  POST_SERIEVOTE_SUCCESS, SEARCH_SERIE_FAILURE,
  SEARCH_SERIE_REQUEST,
  SEARCH_SERIE_SUCCESS,
  SerieActionTypes
} from './serie.type';
import {Dispatch} from 'redux';
import SerieService from '../../../services/api/entities/serie.service';
import {IVote} from '../../../models/vote.model';
import VoteService from '../../../services/api/entities/vote.service';

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

function getSeriesResquest(): SerieActionTypes {
  return {
    type: GET_SERIES_REQUEST,
  }
}

function getSeriesSuccess(series: ISerie[]): SerieActionTypes {
  return {
    type: GET_SERIES_SUCCESS,
    series: series
  }
}

function getSeriesFailure(error: string): SerieActionTypes {
  return {
    type: GET_SERIES_FAILURE,
    error: error,
  }
}

function postSerieVoteResquest(): SerieActionTypes {
  return {
    type: POST_SERIEVOTE_REQUEST,
  }
}

function postSerieVoteSuccess(vote: IVote): SerieActionTypes {
  return {
    type: POST_SERIEVOTE_SUCCESS,
    vote: vote
  }
}

function postSerieVoteFailure(error: string): SerieActionTypes {
  return {
    type: POST_SERIEVOTE_FAILURE,
    error: error,
  }
}


function searchSeriesRequest(): SerieActionTypes {
  return {
    type: SEARCH_SERIE_REQUEST
  }
}

function searchSeriesSuccess(series: ISerie[]): SerieActionTypes {
  return {
    type: SEARCH_SERIE_SUCCESS,
    series: series
  }
}

function searchSeriesFailure(error: string): SerieActionTypes {
  return {
    type: SEARCH_SERIE_FAILURE,
    error: error
  }
}

export const getSerie = (id: number) => {
  const serieService: SerieService = new SerieService();
  return (dispatch: Dispatch<SerieActionTypes>) => {
    dispatch(getSerieResquest());
    return serieService.get(id).then(res => {
      dispatch(getSerieSuccess(res));
    }).catch((error) => dispatch(getSerieFailure(error)));
  }
}

export const postSerieVote = (data: {}) => {
  const voteService: VoteService = new VoteService();
  return (dispatch: Dispatch<SerieActionTypes>) => {
    dispatch(postSerieVoteResquest());
    return voteService.post(data, true).then(res => {
      dispatch(postSerieVoteSuccess(res));
      toast.success("Votre vote est bien pris en compte");
    }).catch((error) => {
      if (error.response.status == 422) {
        toast.error(`Un champ est non renseigné...`);
      } else if (error.response.status == 409) {
        toast.error(`Vous avez déjà noté cette série`);
      } else {
        toast.error(`Erreur serveur !`);
      }
      dispatch(postSerieVoteFailure(error.response.data));
    });
  }
}

export const getAllSeries = () => {
  const serieService: SerieService = new SerieService();
  return (dispatch: Dispatch<SerieActionTypes>) => {
    dispatch(getSeriesResquest());
    return serieService.getAll().then(res => {
      dispatch(getSeriesSuccess(res));
    }).catch((error) => dispatch(getSeriesFailure(error)));
  }
}

export const getBestSeries = () => {
  const serieService: SerieService = new SerieService();
  return (dispatch: Dispatch<SerieActionTypes>) => {
    dispatch(getSeriesResquest());
    return serieService.getBestSeries().then(res => {
      dispatch(getSeriesSuccess(res));
    }).catch((error) => dispatch(getSeriesFailure(error)));
  }
}

export const getSearchSeries = (name: string) => {
  const serieService: SerieService = new SerieService();
  return (dispatch: Dispatch<SerieActionTypes>) => {
    dispatch(searchSeriesRequest());
    return serieService.getSearchSeries(name).then(res => {
      dispatch(searchSeriesSuccess(res));
    }).catch((error) => dispatch(searchSeriesSuccess([])));
  }
}
