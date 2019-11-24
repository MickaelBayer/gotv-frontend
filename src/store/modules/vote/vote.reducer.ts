import { ISerie } from './../../../models/serie.model';
import { IUser } from './../../../models/user.model';
import { IVote } from "../../../models/vote.model";
import { VoteActionTypes, POST_VOTE_SUCCESS } from './vote.type';

const initialVoteState = {
  vote: {
    voe_user: {} as IUser,
    voe_serie: {} as ISerie,
    voe_mark: 0,
    voe_comment: "",
    created_at: ""
  } as IVote
}

export const vote = (state = initialVoteState, action: VoteActionTypes) => {
  switch (action.type) {
    case POST_VOTE_SUCCESS:
      return {
        ...state,
        vote: action.vote
      }
    default:
      return state
  }
}