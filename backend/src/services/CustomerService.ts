import prismaClient from "../prisma";
import { NotFound, Conflict } from "http-errors"
import { Customer, Prisma } from "@prisma/client";

class CustomerService {
  static async create(customer: Customer, userId:string) {

    const client = await prismaClient.customer.upsert({
      create: {
        ...customer,
        userId
      },
      update: {
        ...customer,
      },
      where: {
        phone: customer.phone
      }
    });

    return client

  }

  static async findAll(userId: string) {
    const allClients = await prismaClient.customer.findMany({
      where: {
        userId
      }
    });
    return allClients;
  }

  static async find(id: string) {
    const client = await prismaClient.customer.findUnique({
      where: { id }
    });

    if (!client) return new NotFound("Client not found");

    return client;
  }

  static async delete(id: string) {
    const client = await prismaClient.customer.delete({
      where: { id }
    });

    if (!client) return new NotFound("Client not found");

    return client;
  }
}

export default CustomerService;