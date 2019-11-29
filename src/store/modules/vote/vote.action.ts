import {
  VoteActionTypes,
  GETALL_VOTES_BY_SERIE_REQUEST,
  GETALL_VOTES_BY_SERIE_SUCCESS,
  GETALL_VOTES_BY_SERIE_FAILURE
} from "./vote.type"
import { IVote } from "../../../models/vote.model"
import VoteService from "../../../services/api/entities/vote.service"
import { Dispatch } from "redux"

function getAllVotesBySerieResquest(): VoteActionTypes {
  return {
    type: GETALL_VOTES_BY_SERIE_REQUEST,
  }
}

function getAllVotesBySerieSuccess(votes: IVote[]): VoteActionTypes {
  return {
    type: GETALL_VOTES_BY_SERIE_SUCCESS,
    votes: votes
  }
}

function getAllVotesBySerieFailure(error: string): VoteActionTypes {
  return {
    type: GETALL_VOTES_BY_SERIE_FAILURE,
    error: error,
  }
}

export const getAllVotesBySerie = (id: number) => {
  const voteService: VoteService = new VoteService();
  return (dispatch: Dispatch<VoteActionTypes>) => {
    dispatch(getAllVotesBySerieResquest());
    return voteService.getVoteBySerieId(id).then(res => {
      dispatch(getAllVotesBySerieSuccess(res));
    }).catch((error) => dispatch(getAllVotesBySerieFailure(error.response.data)));
  }
}
