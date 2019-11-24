import { Subscription } from './../../../models/subscription.model';
import { IUser } from './../../../models/user.model';
import { Role } from '../../../models/role.model';
import { UserActionTypes, USER_INFO_SUCCESS } from './user.type';

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
    usr_votes: []
  } as IUser,
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