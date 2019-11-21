import { AuthenticationService } from "../../services/api/authentication.service"
import { authTypes } from "../types/auth.type"
import { IAuth } from "../../models/auth.model"
import { IUser } from "../../models/user.model"

const loginResquest = () => {
  return {
    type: authTypes.LOGIN_REQUEST,
  }
}

const loginSuccess = (auth: IAuth) => {
  return {
    type: authTypes.LOGIN_SUCCESS,
    auth
  }
}

const loginFailure = (error: string) => {
  return {
    type: authTypes.LOGIN_FAILURE,
    error: error,
  }
}

const registerResquest = () => {
  return {
    type: authTypes.LOGIN_REQUEST,
  }
}

const registerSuccess = (auth: IAuth) => {
  return {
    type: authTypes.LOGIN_SUCCESS,
    auth
  }
}

const registerFailure = (error: string) => {
  return {
    type: authTypes.LOGIN_FAILURE,
    error: error,
  }
}

export const login = (username: string, password: string) => {
  let authService: AuthenticationService = new AuthenticationService();
  return (dispatch: any) => {
    dispatch(loginResquest());
    authService.login(username, password).then(res => {
      dispatch(loginSuccess(res));
    }).catch((error) => dispatch(loginFailure(error)));
  }
}

export const register = (user: IUser) => {
  let authService: AuthenticationService = new AuthenticationService();
  return (dispatch: any) => {
    dispatch(registerResquest());
    authService.register(user).then(res => {
      dispatch(registerSuccess(res));
    }).catch((error) => dispatch(registerFailure(error)));
  }
}