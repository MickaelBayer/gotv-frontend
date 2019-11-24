import { ISerieVideo } from "../../../models/serieVideo.model";

export const GET_SERIEVIDEO_REQUEST = "GET_SERIEVIDEO_REQUEST";
export const GET_SERIEVIDEO_SUCCESS = "GET_SERIEVIDEO_SUCCESS";
export const GET_SERIEVIDEO_FAILURE = "GET_SERIEVIDEO_FAILURE";

interface GetSerieVideosSuccessAction {
  type: typeof GET_SERIEVIDEO_SUCCESS;
  serieVideos: ISerieVideo[];
}

interface GetSerieVideosRequestAction {
  type: typeof GET_SERIEVIDEO_REQUEST;
}

interface GetSerieVideosFailureAction {
  type: typeof GET_SERIEVIDEO_FAILURE;
  error: string;
}

export type SerieVideoActionTypes = GetSerieVideosSuccessAction | GetSerieVideosRequestAction | GetSerieVideosFailureAction;