import { Client } from "./Client";
import { User } from "./User";

export interface ISchedule {
  id: string;
  description: string;
  observation?: string;
  price?: number;
  appointment: Date;
  finished: boolean;
  user: User,
  client: Client
}

export class Schedule implements ISchedule {
  id: string;
  description: string;
  observation?: string | undefined;
  price?: number | undefined;
  appointment: Date;
  finished: boolean;
  user: User;
  client: Client;

  constructor(user?: User | null) {
    this.finished = false;
    this.price = 0;
    if (user) {
      this.user = user;
    }
    this.appointment = new Date();
  }
}