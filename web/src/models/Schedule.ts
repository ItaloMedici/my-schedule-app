import { Client } from "./Client";
import { User } from "./User";

export interface ISchedule {
  id: number;
  description: string;
  observation?: string;
  price?: number;
  appointment: Date;
  finished: boolean;
  user: User,
  client: Client
}

export class Schedule implements ISchedule {
  id: number;
  description: string;
  observation?: string | undefined;
  price?: number | undefined;
  appointment: Date;
  finished: boolean;
  user: User;
  client: Client;

  
}