import { Subscription } from './subscription.model';
import { Role } from './role.model';
import { IVote } from './vote.model';

export interface IUser {
  usr_id: number;
  usr_pseudo: string;
  usr_email: string;
  password: string;
  usr_firstname: string;
  usr_lastname: string;
  usr_active: number;
  usr_role: Role;
  usr_subscription: Subscription;
  usr_votes: IVote[];
  usr_birthday: string;
  usr_phone: string;
  usr_postal_code: string;
  usr_address: string;
  usr_city: string;
  usr_country: string;
}

export class User implements IUser {
  readonly usr_id: number;
  readonly usr_pseudo: string;
  readonly usr_email: string;
  readonly password: string;
  readonly usr_firstname: string;
  readonly usr_lastname: string;
  readonly usr_active: number;
  readonly usr_role: Role;
  readonly usr_birthday: string;
  readonly usr_phone: string;
  readonly usr_postal_code: string;
  readonly usr_address: string;
  readonly usr_city: string;
  readonly usr_country: string;
  readonly usr_subscription: Subscription;
  readonly usr_votes: IVote[];
  constructor(usr_id: number,
    usr_pseudo: string,
    usr_email: string,
    password: string,
    usr_firstname: string,
    usr_lastname: string,
    usr_active: number,
    usr_birthday: string,
    usr_phone: string,
    usr_postal_code: string,
    usr_address: string,
    usr_city: string,
    usr_countr: string,
    usr_role: Role,
    usr_subscription: Subscription,
    usr_votes: IVote[]) {
    this.usr_id = usr_id;
    this.usr_pseudo = usr_pseudo;
    this.usr_email = usr_email;
    this.password = password;
    this.usr_firstname = usr_firstname;
    this.usr_lastname = usr_lastname;
    this.usr_active = usr_active;
    this.usr_role = usr_role;
    this.usr_subscription = usr_subscription;
    this.usr_votes = usr_votes;
    this.usr_birthday = usr_birthday
    this.usr_phone = usr_phone
    this.usr_postal_code = usr_postal_code
    this.usr_address = usr_address
    this.usr_city = usr_city
    this.usr_country = usr_countr
  }
}
