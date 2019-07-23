import { User } from './../../../models/users';
import ApiManagerService from "../api-manager.service";

export default class UserService extends ApiManagerService<number, User> {
  constructor() {
    super('users');
  }
}