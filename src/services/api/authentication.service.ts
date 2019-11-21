import { getConfig } from './../../config';
import axios from "axios";
import { IAuth } from '../../models/auth.model';
import { User } from '../../models/user.model';
import Cookie from 'js-cookie';

export class AuthenticationService {
  private BASE_URL: string = getConfig("GOTVSERIES_ADRESS");

  public async register(user: User) {
    return axios.post<IAuth>(`${this.BASE_URL}/auth/register`, { usr_pseudo: user.usr_pseudo, password: user.password }).then(res => {
      if (res.data.access_token) {
        Cookie.set('x-token', res.data.access_token);
      }
      return res.data;
    });
  }

  public async login(username: string, password: string) {
    return axios.post<IAuth>(`${this.BASE_URL}/auth/login`, { username, password }).then(res => {
      if (res.data.access_token) {
        Cookie.set('x-token', res.data.access_token);
      }
      return res.data;
    });
  }

  public async logout(username: string, password: string) {
    Cookie.remove("x-token");
  }
}