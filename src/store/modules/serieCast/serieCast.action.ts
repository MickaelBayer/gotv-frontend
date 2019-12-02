import { Dispatch } from "redux"
import { ISerieCast } from "../../../models/serieCast.model"
import SerieCastService from "../../../services/api/entities/serieCast.service"
import { GET_SERIECAST_REQUEST, GET_SERIECAST_SUCCESS, GET_SERIECAST_FAILURE, SerieCastActionTypes } from "./serieCast.type"

function getSerieCastsResquest(): SerieCastActionTypes {
  return {
    type: GET_SERIECAST_REQUEST,
  }
}

function getSerieCastsSuccess(serieCasts: ISerieCast[]): SerieCastActionTypes {
  return {
    type: GET_SERIECAST_SUCCESS,
    serieCasts: serieCasts
  }
}

function getSerieCastsFailure(error: string): SerieCastActionTypes {
  return {
    type: GET_SERIECAST_FAILURE,
    error: error,
  }
}

export const getSerieCasts = (id: number) => {
  const serieCastService: SerieCastService = new SerieCastService();
  return (dispatch: Dispatch<SerieCastActionTypes>) => {
    dispatch(getSerieCastsResquest());
    return serieCastService.getCasts(id).then(res => {
      dispatch(getSerieCastsSuccess(res));
    }).catch((error) => {
      dispatch(getSerieCastsSuccess([]))
    });
  }
}