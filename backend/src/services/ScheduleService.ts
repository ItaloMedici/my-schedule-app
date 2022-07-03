import { Schedule } from "../models";
import prismaClient from "../prisma";
import { NotFound } from "http-errors"

class ScheduleService {
  static async create(scheduleInfo: Schedule, userId: string) {

    const {
      description,
      observation,
      price,
      appointment,
      clientId } = scheduleInfo;

    const schedule = clientId
      ? await prismaClient.schedule.create({
        data: {
          description,
          observation,
          price,
          appointment,
          client: { connect: { id: clientId } },
          user: { connect: { id: userId } }
        },
        include: {
          user: true,
          client: true
        }
      })
      : await prismaClient.schedule.create({
        data: {
          ...scheduleInfo,
          user: { connect: { id: userId } }
        },
        include: {
          user: true,
          client: true
        }
      })

    return schedule;
  }


  static async findAll(userId: string) {
    const allschedule = await prismaClient.schedule.findMany({
      select: {
        appointment: true,
        description: true,
        price: true,
        id: true,
        user: {
          select: {
            id: true,
            name: true
          }
        },
        client: {
          select: {
            id: true,
            name: true
          }
        }
      },
      where: {
        userId
      }
    });

    if (!allschedule) throw new NotFound("schedule not found");

    return allschedule;
  }

  static async find(id: string) {
    const schedule = await prismaClient.schedule.findUnique({
      where: { id }
    });

    if (!schedule) throw new NotFound("schedule not found");

    return schedule;
  }

  static async delete(id: string) {
    const schedule = await prismaClient.schedule.delete({
      where: { id }
    });

    if (!schedule) throw new NotFound("schedule not found");

    return schedule;
  }
}

export default ScheduleService;