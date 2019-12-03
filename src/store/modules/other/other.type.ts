export const SET_SEARCH_REQUEST = "SET_SEARCH_REQUEST";
export const SET_SEARCH_SUCCESS = "SET_SEARCH_SUCCESS";
export const SET_SEARCH_FAILURE = "SET_SEARCH_FAILURE";

interface SetSearchSuccessAction {
  type: typeof SET_SEARCH_SUCCESS;
  show: boolean;
}

interface SetSearchRequestAction {
  type: typeof SET_SEARCH_REQUEST;
}

interface SetSearchFailureAction {
  type: typeof SET_SEARCH_FAILURE;
  error: string;
}

export type OtherActionTypes = SetSearchSuccessAction | SetSearchRequestAction | SetSearchFailureAction;