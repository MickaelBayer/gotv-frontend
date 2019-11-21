import { IUser } from './../../models/user.model';
import { IAuth } from './../../models/auth.model';
import { authTypes } from './../types/auth.type';

const initialAuthState: IAuth = {
  access_token: "",
  token_type: "",
  expires_in: 0,
  user: {} as IUser
}

export const auth = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.access_token,
        token_type: action.token_type,
        expires_in: action.expires_in,
        user: action.user
      }
    case authTypes.REGISTER_SUCCESS:
      return {
        ...state,
        access_token: action.access_token,
        token_type: action.token_type,
        expires_in: action.expires_in,
        user: action.user
      }
    default:
      return state
  }
}