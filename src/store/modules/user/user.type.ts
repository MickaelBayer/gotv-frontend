import { IUser } from "../../../models/user.model";

export const USER_INFO_REQUEST = "USER_INFO_REQUEST";
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_FAILURE = "USER_INFO_FAILURE";

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

export type UserActionTypes = UserInfoSuccessAction | UserInfoRequestAction | UserInfoFailureAction;