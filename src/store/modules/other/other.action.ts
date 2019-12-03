import { OtherActionTypes, SET_SEARCH_FAILURE, SET_SEARCH_SUCCESS, SET_SEARCH_REQUEST } from "./other.type"
import { Dispatch } from "redux"

function setSearchResquest(): OtherActionTypes {
  return {
    type: SET_SEARCH_REQUEST,
  }
}

function setSearchSuccess(show: boolean): OtherActionTypes {
  return {
    type: SET_SEARCH_SUCCESS,
    show: show
  }
}

function setSearchFailure(error: string): OtherActionTypes {
  return {
    type: SET_SEARCH_FAILURE,
    error: error,
  }
}

export const setShow = (show: boolean) => {
  return (dispatch: Dispatch<OtherActionTypes>) => {
    dispatch(setSearchResquest());
    dispatch(setSearchSuccess(show));
  }
}

