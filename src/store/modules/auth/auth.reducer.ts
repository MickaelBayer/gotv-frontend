import { IAuth } from '../../../models/auth.model';
import { AuthActionTypes, LOGIN_SUCCESS, REGISTER_SUCCESS } from './auth.type';
import { AppState } from '../..';

const initialAuthState: IAuth = {
  access_token: "",
  token_type: "",
  expires_in: 0
}

export const auth = (state = initialAuthState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.auth.access_token,
        token_type: action.auth.token_type,
        expires_in: action.auth.expires_in,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        access_token: action.auth.access_token,
        token_type: action.auth.token_type,
        expires_in: action.auth.expires_in,
      }
    default:
      return state
  }
}

export const getAuth = (state: AppState) => state.auth