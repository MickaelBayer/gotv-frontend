import { Subscription } from './subscription.model';
import { Role } from './role.model';
import { Vote } from './vote.model';

export interface User {
  usr_id: number;
  usr_pseudo: string;
  usr_email: string;
  usr_firstname: string;
  usr_lastname: string;
  usr_active: string;
  usr_role: Role;
  usr_subscription: Subscription;
  usr_votes: Vote[];
}