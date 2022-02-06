import { Client } from "../models";
import prismaClient from "../prisma";

class ClientService {
  static async create(clientInfo: Client) {
    const client = await prismaClient.client.create({
      data: {
        ...clientInfo
      }
    });

    return client
  }
}

export default ClientService;