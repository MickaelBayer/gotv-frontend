import { ISerie } from "../../../models/serie.model";
import { IVote } from "../../../models/vote.model";

export const GET_SERIE_REQUEST = "GET_SERIE_REQUEST";
export const GET_SERIE_SUCCESS = "GET_SERIE_SUCCESS";
export const GET_SERIE_FAILURE = "GET_SERIE_FAILURE";

export const POST_SERIEVOTE_REQUEST = "POST_SERIEVOTE_REQUEST";
export const POST_SERIEVOTE_SUCCESS = "POST_SERIEVOTE_SUCCESS";
export const POST_SERIEVOTE_FAILURE = "POST_SERIEVOTE_FAILURE";

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

export type SerieActionTypes = GetSerieSuccessAction | GetSerieRequestAction | GetSerieFailureAction | PostSerieVoteSuccessAction | PostSerieVoteRequestAction | PostSerieVoteFailureAction;