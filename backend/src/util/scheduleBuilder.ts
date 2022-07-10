import { ScheduleFeed, ScheduleRes, ScheduleWeek } from "../models/responses";

export const buildSheduleFeed = (data: ScheduleRes[]) => {
  const feed: ScheduleFeed = new ScheduleFeed();

  if (data) {
    data.forEach(schedule => {
      let list = isOverdue(schedule) ? 'overdue' : 'avaliable'

      let indexSameDay = feed[list].findIndex(s =>
        isSameDay(s.label, schedule.appointment)
      )

      if (indexSameDay !== -1) {
        feed[list][indexSameDay].schedules.push(schedule)
      } else {
        let aux = new ScheduleWeek();
        aux.label = schedule.appointment;
        aux.schedules.push(schedule)
        feed[list].push(aux)
      }
    })
  }

  return feed;
}

const isSameDay = (date1: Date, date2: Date = new Date()) => {
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  return date1.getTime() === date2.getTime();
}

const isOverdue = (schedule: ScheduleRes) => {
  return (schedule.appointment.getTime() < new Date().getTime() && !schedule.finished)
}