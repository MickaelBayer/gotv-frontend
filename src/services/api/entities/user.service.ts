import { IUser } from '../../../models/user.model';
import ApiManagerService from "../api-manager.service";

export default class UserService extends ApiManagerService<IUser> {
  constructor() {
    super('users');
  }
}
