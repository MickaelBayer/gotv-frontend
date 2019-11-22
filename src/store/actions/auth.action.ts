import { IAuth } from "../../models/auth.model"
import { IUser } from "../../models/user.model"
import { AuthenticationService } from "../../services/api/authentication.service"
import {
  AuthActionTypes,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "../types/auth.type"
import { Dispatch } from "redux"

function loginResquest(): AuthActionTypes {
  return {
    type: LOGIN_REQUEST,
  }
}

function loginSuccess(auth: IAuth): AuthActionTypes {
  return {
    type: LOGIN_SUCCESS,
    auth: auth
  }
}

function loginFailure(error: string): AuthActionTypes {
  return {
    type: LOGIN_FAILURE,
    error: error,
  }
}

function registerResquest(): AuthActionTypes {
  return {
    type: REGISTER_REQUEST,
  }
}

function registerSuccess(auth: IAuth): AuthActionTypes {
  return {
    type: REGISTER_SUCCESS,
    auth: auth
  }
}

function registerFailure(error: string): AuthActionTypes {
  return {
    type: REGISTER_FAILURE,
    error: error,
  }
}

export const login = (username: string, password: string) => {
  let authService: AuthenticationService = new AuthenticationService();
  return (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(loginResquest());
    return authService.login(username, password).then(res => {
      dispatch(loginSuccess(res));
    }).catch((error) => dispatch(loginFailure(error)));
  }
}

export const register = (user: IUser) => {
  let authService: AuthenticationService = new AuthenticationService();
  return (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(registerResquest());
    return authService.register(user).then(res => {
      dispatch(registerSuccess(res));
    }).catch((error) => dispatch(registerFailure(error)));
  }
}