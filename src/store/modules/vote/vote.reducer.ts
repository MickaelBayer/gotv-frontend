import { ISerie } from './../../../models/serie.model';
import { IUser } from './../../../models/user.model';
import { IVote } from "../../../models/vote.model";
import { VoteActionTypes, GETALL_VOTES_BY_SERIE_SUCCESS } from './vote.type';

const initialVoteState = {
  votes: [{
    voe_user: {} as IUser,
    voe_serie: {} as ISerie,
    voe_mark: 0,
    voe_comment: "",
    created_at: ""
  }] as IVote[],
  isLoading: true
}

export const vote = (state = initialVoteState, action: VoteActionTypes) => {
  switch (action.type) {
    case GETALL_VOTES_BY_SERIE_SUCCESS:
      return {
        ...state,
        votes: action.votes,
        isLoading: false
      }
    default:
      return state
  }
}