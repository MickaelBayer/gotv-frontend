import Cookie from 'js-cookie';
import { IUser } from './../../../models/user.model';
import { USER_INFO_REQUEST, USER_INFO_FAILURE, USER_INFO_SUCCESS, UserActionTypes, GETALL_USERS_REQUEST, GETALL_USERS_SUCCESS, GETALL_USERS_FAILURE } from './user.type';
import { Dispatch } from 'redux';
import jwt_decode from 'jwt-decode';
import UserService from '../../../services/api/entities/user.service';

function getAllUsersResquest(): UserActionTypes {
  return {
    type: GETALL_USERS_REQUEST,
  }
}

function getAllUsersSuccess(user: IUser[]): UserActionTypes {
  return {
    type: GETALL_USERS_SUCCESS,
    users: user
  }
}

function getAllUsersFailure(error: string): UserActionTypes {
  return {
    type: GETALL_USERS_FAILURE,
    error: error,
  }
}

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

export const getAllUsers = () => {
  const userService: UserService = new UserService();
  return (dispatch: Dispatch<UserActionTypes>) => {
    dispatch(getAllUsersResquest());
    return userService.getAll().then(res => {
      dispatch(getAllUsersSuccess(res));
    }).catch((error) => dispatch(getAllUsersFailure(error.response.data)));
  }
}
