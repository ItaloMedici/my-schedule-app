import { Schedule } from "../models";
import prismaClient from "../prisma";

class ScheduleService {
  static async create(scheduleInfo: Schedule, userId: string) {

    const {
      description,
      observation,
      price,
      appointment,
      clientId } = scheduleInfo;

    const schedule = await prismaClient.schedule.create({
      data: {
        ...scheduleInfo,
        user: {connect: {id: userId}}
      },
      include: {
        user: true,
        client: true
      }
    })

    return schedule;
  }
}

export default ScheduleService;