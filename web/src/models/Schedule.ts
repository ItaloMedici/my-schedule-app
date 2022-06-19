export interface Schedule {
  id: number;
  description: string;
  observation?: string;
  price?: number;
  appointment: Date;
  finished: boolean;
}
