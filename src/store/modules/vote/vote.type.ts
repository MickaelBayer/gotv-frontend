import { IVote } from "../../../models/vote.model";

export const GETALL_VOTES_BY_SERIE_REQUEST = "GETALL_VOTES_BY_SERIE_REQUEST";
export const GETALL_VOTES_BY_SERIE_SUCCESS = "GETALL_VOTES_BY_SERIE_SUCCESS";
export const GETALL_VOTES_BY_SERIE_FAILURE = "GETALL_VOTES_BY_SERIE_FAILURE";

interface GetAllVotesBySerieSuccessAction {
  type: typeof GETALL_VOTES_BY_SERIE_SUCCESS;
  votes: IVote[];
}

interface GetAllVotesBySerieRequestAction {
  type: typeof GETALL_VOTES_BY_SERIE_REQUEST;
}

interface GetAllVotesBySerieFailureAction {
  type: typeof GETALL_VOTES_BY_SERIE_FAILURE;
  error: string;
}

export type VoteActionTypes = GetAllVotesBySerieSuccessAction | GetAllVotesBySerieRequestAction | GetAllVotesBySerieFailureAction;