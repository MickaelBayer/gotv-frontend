import { IAuth } from "../../../models/auth.model";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  auth: IAuth;
}

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: string;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  auth: IAuth;
}

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  error: string;
}

export type AuthActionTypes = LoginSuccessAction | LoginRequestAction | LoginFailureAction | RegisterSuccessAction | RegisterRequestAction | RegisterFailureAction;