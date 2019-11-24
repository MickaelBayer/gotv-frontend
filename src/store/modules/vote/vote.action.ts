import { VoteActionTypes, POST_VOTE_REQUEST, POST_VOTE_SUCCESS, POST_VOTE_FAILURE } from "./vote.type"
import { IVote } from "../../../models/vote.model"
import VoteService from "../../../services/api/entities/vote.service"
import { Dispatch } from "redux"

function postVoteResquest(): VoteActionTypes {
  return {
    type: POST_VOTE_REQUEST,
  }
}

function postVoteSuccess(vote: IVote): VoteActionTypes {
  return {
    type: POST_VOTE_SUCCESS,
    vote: vote
  }
}

function postVoteFailure(error: string): VoteActionTypes {
  return {
    type: POST_VOTE_FAILURE,
    error: error,
  }
}

export const postVote = (data: {}) => {
  const voteService: VoteService = new VoteService();
  return (dispatch: Dispatch<VoteActionTypes>) => {
    dispatch(postVoteResquest());
    return voteService.post(data, true).then(res => {
      console.log(res);
      dispatch(postVoteSuccess(res));
    }).catch((error) => dispatch(postVoteFailure(error.response.data)));
  }
}
