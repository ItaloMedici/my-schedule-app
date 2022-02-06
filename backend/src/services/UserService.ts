import prismaClient from "../prisma";
import { NotFound } from "http-errors"

class UserService {

  static async findAll() {
    const allUser = await prismaClient.user.findMany();
    return allUser;
  }

  static async find(id: string) {
    const user = await prismaClient.user.findUnique({
      where: { id }
    });

    if (!user) return new NotFound("User not found");

    return user;
  }

  static async delete(id: string) {
    const user = await prismaClient.user.update({
      where: { id },
      data: {
        schedules: {
          deleteMany: {}
        }
      }
    });

    if (!user) return new NotFound("User not found");

    return user;
  }
}

export default UserService;