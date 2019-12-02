import { IUser } from "../../../models/user.model";

export const USER_INFO_REQUEST = "USER_INFO_REQUEST";
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_FAILURE = "USER_INFO_FAILURE";

export const GETALL_USERS_REQUEST = "GETALL_USERS_REQUEST";
export const GETALL_USERS_SUCCESS = "GETALL_USERS_SUCCESS";
export const GETALL_USERS_FAILURE = "GETALL_USERS_FAILURE";

interface UserInfoSuccessAction {
  type: typeof USER_INFO_SUCCESS;
  user: IUser;
}

interface UserInfoRequestAction {
  type: typeof USER_INFO_REQUEST;
}

interface UserInfoFailureAction {
  type: typeof USER_INFO_FAILURE;
  error: string;
}

interface GetAllUsersSuccessAction {
  type: typeof GETALL_USERS_SUCCESS;
  users: IUser[];
}

interface GetAllUsersRequestAction {
  type: typeof GETALL_USERS_REQUEST;
}

interface GetAllUsersFailureAction {
  type: typeof GETALL_USERS_FAILURE;
  error: string;
}

export type UserActionTypes = UserInfoSuccessAction | UserInfoRequestAction | UserInfoFailureAction | GetAllUsersSuccessAction | GetAllUsersRequestAction | GetAllUsersFailureAction;