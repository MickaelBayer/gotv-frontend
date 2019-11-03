import { User } from '../../../models/user.model';
import ApiManagerService from "../api-manager.service";

export default class UserService extends ApiManagerService<number, User> {
  constructor() {
    super('users');
  }
}