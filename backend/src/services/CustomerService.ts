import prismaClient from "../prisma";
import { NotFound, Conflict } from "http-errors"
import { Costumer, Prisma } from "@prisma/client";

class CustomerService {
  static async create(clientInfo: Costumer) {

    try {
      const client = await prismaClient.costumer.create({
        data: {
          ...clientInfo
        }
      });
  
      return client
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          return new Conflict("There is a unique constraint violation, check that has to be unique")
        }
      }
    }

  }

  static async findAll(userId: string) {
    const allClients = await prismaClient.user.findMany({
      where: {
        
      }
    });
    return allClients;
  }

  static async find(id: string) {
    const client = await prismaClient.costumer.findUnique({
      where: { id }
    });

    if (!client) return new NotFound("Client not found");

    return client;
  }

  static async delete(id: string) {
    const client = await prismaClient.costumer.delete({
      where: { id }
    });

    if (!client) return new NotFound("Client not found");

    return client;
  }
}

export default CustomerService;