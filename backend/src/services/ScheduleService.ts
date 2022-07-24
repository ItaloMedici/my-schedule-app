import { Schedule } from "../models";
import prismaClient from "../prisma";
import { NotFound } from "http-errors"

class ScheduleService {
  static async createOrUpdate(scheduleInfo: Schedule, userId: string) {

    const {
      id,
      description,
      observation,
      price,
      appointment,
      finished,
      clientId } = scheduleInfo;

    const schedule = clientId
      ? await prismaClient.schedule.upsert({
        create: {
          description,
          observation,
          price,
          appointment,
          finished,
          client: { connect: { id: clientId } },
          user: { connect: { id: userId } }
        },
        where: {
          id
        },
        update: {
          description,
          observation,
          price,
          appointment,
          finished,
          client: { connect: { id: clientId } },
          user: { connect: { id: userId } },
        },
        include: {
          user: true,
          client: true
        }
      })
      :  await prismaClient.schedule.upsert({
        create: {
          description,
          observation,
          price,
          appointment,
          finished,
          user: { connect: { id: userId } }
        },
        where: {
          id
        },
        update: {
          description,
          observation,
          price,
          appointment,
          finished,
          user: { connect: { id: userId } },
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
        finished: true,
        id: true,
        client: {
          select: {
            id: true,
            name: true
          }
        }
      },
      where: {
        userId
      },
      orderBy: {
        appointment: 'asc'
      }
    });
    
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