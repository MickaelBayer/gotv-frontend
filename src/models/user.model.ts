import { Subscription } from './subscription.model';
import { Role } from './role.model';
import { Vote } from './vote.model';

export interface User {
  id: number;
  pseudo: string;
  email: string;
  firstname: string;
  lastname: string;
  active: string;
  role: Role;
  subscription: Subscription;
  votes: Vote[];
}