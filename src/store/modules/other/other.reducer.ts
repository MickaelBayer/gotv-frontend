import { OtherActionTypes, SET_SEARCH_SUCCESS, SET_MODAL_SUCCESS } from "./other.type"

const initialOtherState = {
  showSearch: false,
  showModal: false,
}

export const other = (state = initialOtherState, action: OtherActionTypes) => {
  switch (action.type) {
    case SET_SEARCH_SUCCESS:
      return {
        ...state,
        showSearch: action.showSearch
      }
    case SET_MODAL_SUCCESS:
      return {
        ...state,
        showModal: action.showModal
      }
    default:
      return state
  }
}
