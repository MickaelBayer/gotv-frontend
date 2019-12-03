export const SET_SEARCH_REQUEST = "SET_SEARCH_REQUEST";
export const SET_SEARCH_SUCCESS = "SET_SEARCH_SUCCESS";
export const SET_SEARCH_FAILURE = "SET_SEARCH_FAILURE";

export const SET_MODAL_REQUEST = "SET_MODAL_REQUEST";
export const SET_MODAL_SUCCESS = "SET_MODAL_SUCCESS";
export const SET_MODAL_FAILURE = "SET_MODAL_FAILURE";

interface SetSearchSuccessAction {
  type: typeof SET_SEARCH_SUCCESS;
  showSearch: boolean;
}

interface SetSearchRequestAction {
  type: typeof SET_SEARCH_REQUEST;
}

interface SetSearchFailureAction {
  type: typeof SET_SEARCH_FAILURE;
  error: string;
}

interface SetModalSuccessAction {
  type: typeof SET_MODAL_SUCCESS;
  showModal: boolean;
}

interface SetModalRequestAction {
  type: typeof SET_MODAL_REQUEST;
}

interface SetModalFailureAction {
  type: typeof SET_MODAL_FAILURE;
  error: string;
}

export type OtherActionTypes = SetModalSuccessAction | SetModalRequestAction | SetModalFailureAction | SetSearchSuccessAction | SetSearchRequestAction | SetSearchFailureAction;