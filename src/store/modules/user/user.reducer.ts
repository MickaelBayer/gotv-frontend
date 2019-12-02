import { Subscription } from './../../../models/subscription.model';
import { IUser } from './../../../models/user.model';
import { Role } from '../../../models/role.model';
import { UserActionTypes, USER_INFO_SUCCESS, GETALL_USERS_SUCCESS } from './user.type';

const initialAuthState = {
  user: {
    usr_id: 0,
    usr_pseudo: "",
    usr_firstname: "",
    usr_lastname: "",
    usr_email: "",
    usr_active: 1,
    password: "",
    usr_role: {} as Role,
    usr_subscription: {} as Subscription,
    usr_votes: [],
    usr_birthday: "",
    usr_phone: "",
    usr_postal_code: "",
    usr_address: "",
    usr_city: "",
    usr_country: "",
  } as IUser,
  isLoading: true
}

const initialUsersState = {
  users: [{
    usr_id: 0,
    usr_pseudo: "",
    usr_firstname: "",
    usr_lastname: "",
    usr_email: "",
    usr_active: 1,
    password: "",
    usr_role: {} as Role,
    usr_subscription: {} as Subscription,
    usr_votes: [],
    usr_birthday: "",
    usr_phone: "",
    usr_postal_code: "",
    usr_address: "",
    usr_city: "",
    usr_country: "",
  }] as IUser[],
  isLoading: true
}

export const user = (state = initialAuthState, action: UserActionTypes) => {
  switch (action.type) {
    case USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false
      }
    default:
      return state
  }
}

export const users = (state = initialUsersState, action: UserActionTypes) => {
  switch (action.type) {
    case GETALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoading: false
      }
    default:
      return state
  }
}
