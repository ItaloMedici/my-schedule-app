import { Client } from "./Client";
import { User } from "./User";

export interface Schedule {
  id: number;
  description: string;
  observation?: string;
  price?: number;
  appointment: Date;
  finished: boolean;
  user: User,
  client: Client
}
