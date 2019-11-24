import { ISerieVideo } from "../../../models/serieVideo.model";
import { SerieVideoActionTypes, GET_SERIEVIDEO_SUCCESS } from "./serieVideo.type";

const initialSerieVideoState = {
  serieVideos: [{
    id: "",
    key: "",
    name: "",
    type: ""
  }] as ISerieVideo[],
  isLoading: true
}

export const serieVideo = (state = initialSerieVideoState, action: SerieVideoActionTypes) => {
  switch (action.type) {
    case GET_SERIEVIDEO_SUCCESS:
      return {
        ...state,
        serieVideos: action.serieVideos,
        isLoading: false
      }
    default:
      return state
  }
}