import { ISerie } from '../../../models/serie.model';
import {
  SerieActionTypes,
  GET_SERIE_REQUEST,
  GET_SERIE_SUCCESS,
  GET_SERIE_FAILURE,
  POST_SERIEVOTE_REQUEST,
  POST_SERIEVOTE_SUCCESS,
  POST_SERIEVOTE_FAILURE
} from './serie.type';
import { Dispatch } from 'redux';
import SerieService from '../../../services/api/entities/serie.service';
import { IVote } from '../../../models/vote.model';
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
      console.log(res);
      dispatch(postSerieVoteSuccess(res));
    }).catch((error) => dispatch(postSerieVoteFailure(error.response.data)));
  }
}