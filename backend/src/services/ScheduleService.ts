import { Schedule } from "../models";
import prismaClient from "../prisma";
import { NotFound } from "http-errors"

class ScheduleService {
  static async createOrUpdate(scheduleInfo: Schedule, userId: string) {

    const { id } = scheduleInfo;

    const schedule = id
      ? this.update(scheduleInfo, userId)
      : this.create(scheduleInfo, userId)

    return schedule;
  }

  static async update(scheduleInfo: Schedule, userId: string) {
    const {
      id,
      description,
      observation,
      price,
      appointment,
      finished,
      customerId } = scheduleInfo;

    const schedule = customerId
      ? await prismaClient.schedule.upsert({
        create: {
          id,
          description,
          observation,
          price,
          appointment,
          finished,
          client: { connect: { id: customerId } },
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
          client: { connect: { id: customerId } },
        },
        include: {
          client: true
        }
      })
      : await prismaClient.schedule.upsert({
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

  static async create(scheduleInfo: Schedule, userId: string) {
    const {
      description,
      observation,
      price,
      appointment,
      finished,
      customerId } = scheduleInfo;

    const schedule = customerId
      ? await prismaClient.schedule.create({
        data: {
          description,
          observation,
          price,
          appointment,
          finished,
          client: { connect: { id: customerId } },
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