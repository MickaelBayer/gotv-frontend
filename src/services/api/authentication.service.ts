import { getConfig } from './../../config';
import axios from "axios";

export class AuthenticationService {
  private BASE_URL: string = getConfig("GOTVSERIES_ADRESS");

  public async register(data: any) {
    return axios.post(`${this.BASE_URL}/auth/register`, data);
  }

  public async login(data: any) {
    return axios.post(`${this.BASE_URL}/auth/login`, data);
  }
}