import { OtherActionTypes, SET_SEARCH_SUCCESS } from "./other.type"

const initialOtherState = {
  show: false,
}

export const other = (state = initialOtherState, action: OtherActionTypes) => {
  console.log(action);
  switch (action.type) {
    case SET_SEARCH_SUCCESS:

      return {
        ...state,
        show: action.show
      }
    default:
      return state
  }
}