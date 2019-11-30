import Cookie from 'js-cookie';
import { IUser } from './../../../models/user.model';
import { USER_INFO_REQUEST, USER_INFO_FAILURE, USER_INFO_SUCCESS, UserActionTypes } from './user.type';
import { Dispatch } from 'redux';
import jwt_decode from 'jwt-decode';
import UserService from '../../../services/api/entities/user.service';

function getUserInfoResquest(): UserActionTypes {
  return {
    type: USER_INFO_REQUEST,
  }
}

function getUserInfoSuccess(user: IUser): UserActionTypes {
  return {
    type: USER_INFO_SUCCESS,
    user: user
  }
}

function getUserInfoFailure(error: string): UserActionTypes {
  return {
    type: USER_INFO_FAILURE,
    error: error,
  }
}

export const getUserInfo = () => {
  const userService: UserService = new UserService();
  return (dispatch: Dispatch<UserActionTypes>) => {
    dispatch(getUserInfoResquest());
    const token: string = Cookie.get("x-token") as string;
    const payload: any = jwt_decode(token);
    return userService.get(payload.id).then(res => {
      dispatch(getUserInfoSuccess(res));
    }).catch((error) => dispatch(getUserInfoFailure(error.response.data)));
  }
}
