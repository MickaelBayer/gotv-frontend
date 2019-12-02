import { SerieCastActionTypes, GET_SERIECAST_SUCCESS } from "./serieCast.type";
import { ISerieCast } from "../../../models/serieCast.model";

const initialSerieCastState = {
  serieCasts: [{
    id: "",
    character: "",
    name: "",
    profile_path: "",
    order: ""
  }] as ISerieCast[],
  isLoading: true
}

export const serieCast = (state = initialSerieCastState, action: SerieCastActionTypes) => {
  switch (action.type) {
    case GET_SERIECAST_SUCCESS:
      return {
        ...state,
        serieCasts: action.serieCasts,
        isLoading: false
      }
    default:
      return state
  }
}