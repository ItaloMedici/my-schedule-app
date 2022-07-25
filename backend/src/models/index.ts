export interface User {
  id: string;
  name?: string;
  email: string;
  password: string;
  createdAt: string;
  schedules: Schedule[];
};

export interface Schedule {
  id?: string;
  description: string;
  observation?: string;
  price?: number;
  appointment: Date;
  customerId?: never;
  finished?: boolean;
}

export interface Costumer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

