import { IAuth } from "../../../models/auth.model"
import { IUser } from "../../../models/user.model"
import { AuthenticationService } from "../../../services/api/authentication.service"
import {
  AuthActionTypes,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./auth.type"
import { Dispatch } from "redux"
import { toast } from "react-toastify"

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
      toast.success(`Connexion réussie ${username}`);
      document.location.href="/"
    }).catch((error) => {
      if (error.response.status == 401) {
        toast.error(`Mauvais identifiant ou mot de passe`);
      } else if (error.response.status == 403) {
        toast.error(`Vote compte est désactivé...`);
      } else {
        toast.error(`Erreur serveur !`);
      }
      dispatch(loginFailure(error.response))
    });
  }
}

export const register = (user: IUser) => {
  let authService: AuthenticationService = new AuthenticationService();
  return (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch(registerResquest());
    return authService.register(user).then(res => {
      dispatch(registerSuccess(res));
      toast.success(`Inscription réussie. Bienvenue ${user.usr_pseudo}`);
      document.location.href="/signin"
    }).catch((error) => {
      if (error.response.status == 409) {
        toast.error(`L'email ou le pseudo existe déjà...`);
      } else if (error.response.status == 422) {
        toast.error(`Un champ est non renseigné...`);
      } else {
        toast.error(`Erreur serveur !`);
      }
      dispatch(registerFailure(error.response.data))
    });
  }
}
