export interface ScheduleRes {
  appointment: string;
  id: string;
  description: string;
  price: number;
  finished: boolean;
  client: {
      id: string;
      name: string;
  };
}

export interface ScheduleWeek {
  label?: string;
  schedules: ScheduleRes[];
}

export interface ScheduleFeed {
  avaliable: ScheduleWeek[];
  overdue: ScheduleWeek[];
}