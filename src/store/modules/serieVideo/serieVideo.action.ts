import { SerieVideoActionTypes, GET_SERIEVIDEO_REQUEST, GET_SERIEVIDEO_SUCCESS, GET_SERIEVIDEO_FAILURE } from "./serieVideo.type"
import { ISerieVideo } from "../../../models/serieVideo.model"
import SerieVideoService from "../../../services/api/entities/serieVideo.service"
import { Dispatch } from "redux"

function getSerieVideosResquest(): SerieVideoActionTypes {
  return {
    type: GET_SERIEVIDEO_REQUEST,
  }
}

function getSerieVideosSuccess(serieVideos: ISerieVideo[]): SerieVideoActionTypes {
  return {
    type: GET_SERIEVIDEO_SUCCESS,
    serieVideos: serieVideos
  }
}

function getSerieVideosFailure(error: string): SerieVideoActionTypes {
  return {
    type: GET_SERIEVIDEO_FAILURE,
    error: error,
  }
}

export const getSerieVideos = (id: number) => {
  const serieVideoService: SerieVideoService = new SerieVideoService();
  return (dispatch: Dispatch<SerieVideoActionTypes>) => {
    dispatch(getSerieVideosResquest());
    return serieVideoService.getVideos(id).then(res => {
      console.log(res);
      dispatch(getSerieVideosSuccess(res));
    }).catch((error) => dispatch(getSerieVideosFailure(error)));
  }
}