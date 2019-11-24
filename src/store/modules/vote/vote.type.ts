import { IVote } from "../../../models/vote.model";

export const POST_VOTE_REQUEST = "POST_VOTE_REQUEST";
export const POST_VOTE_SUCCESS = "POST_VOTE_SUCCESS";
export const POST_VOTE_FAILURE = "POST_VOTE_FAILURE";

interface PostVoteSuccessAction {
  type: typeof POST_VOTE_SUCCESS;
  vote: IVote;
}

interface PostVoteRequestAction {
  type: typeof POST_VOTE_REQUEST;
}

interface PostVoteFailureAction {
  type: typeof POST_VOTE_FAILURE;
  error: string;
}

export type VoteActionTypes = PostVoteSuccessAction | PostVoteRequestAction | PostVoteFailureAction;