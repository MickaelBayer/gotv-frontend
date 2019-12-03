import { OtherActionTypes, SET_SEARCH_FAILURE, SET_SEARCH_SUCCESS, SET_SEARCH_REQUEST, SET_MODAL_REQUEST, SET_MODAL_FAILURE, SET_MODAL_SUCCESS } from "./other.type"
import { Dispatch } from "redux"

function setSearchResquest(): OtherActionTypes {
  return {
    type: SET_SEARCH_REQUEST,
  }
}

function setSearchSuccess(showSearch: boolean): OtherActionTypes {
  return {
    type: SET_SEARCH_SUCCESS,
    showSearch: showSearch
  }
}

function setSearchFailure(error: string): OtherActionTypes {
  return {
    type: SET_SEARCH_FAILURE,
    error: error,
  }
}

function setModalResquest(): OtherActionTypes {
  return {
    type: SET_MODAL_REQUEST,
  }
}

function setModalSuccess(showModal: boolean): OtherActionTypes {
  return {
    type: SET_MODAL_SUCCESS,
    showModal: showModal
  }
}

function setModalFailure(error: string): OtherActionTypes {
  return {
    type: SET_MODAL_FAILURE,
    error: error,
  }
}

export const setShowSearch = (show: boolean) => {
  return (dispatch: Dispatch<OtherActionTypes>) => {
    dispatch(setSearchResquest());
    dispatch(setSearchSuccess(show));
  }
}

export const setShowModal = (show: boolean) => {
  return (dispatch: Dispatch<OtherActionTypes>) => {
    dispatch(setModalResquest());
    dispatch(setModalSuccess(show));
  }
}

