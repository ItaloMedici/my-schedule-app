export interface User {
  id: string;
  name?: string;
  email: string;
  password: string;
  createdAt: string;
  schedules: Schedule[];
};

export interface Schedule {
  description: string;
  observation?: string;
  price?: number;
  appointment: Date;
  clientId?: never;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}
