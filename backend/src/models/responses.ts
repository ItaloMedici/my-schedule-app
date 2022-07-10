import { Decimal } from "@prisma/client/runtime";

export class ScheduleRes {
  appointment: Date;
  id: string;
  description: string;
  price: Decimal;
  finished: boolean;
  client: {
      id: string;
      name: string;
  };
}

export class ScheduleWeek {
  label?: Date;
  schedules: ScheduleRes[] = [];
}

export class ScheduleFeed {
  avaliable: ScheduleWeek[] = []
  overdue: ScheduleWeek[] = []
}