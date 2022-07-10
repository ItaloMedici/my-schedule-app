import prismaClient from "../prisma";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { NotFound, Unauthorized } from "http-errors"

type UserData = {
  name?: string
  email: string
  password: string
}

class AuthUserService {
  static async register(data: UserData) {

    data.password = bcrypt.hashSync(data.password, 8);

    const user = prismaClient.user.create({
      data
    })

    return user;
  }

  static async login(data: UserData) {
    const { email, password } = data;

    const user = await prismaClient.user.findUnique({
      where: { email }
    })

    if (!user) throw new NotFound("wrongEmailPassword")

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) throw new Unauthorized("wrongEmailPassword")

    delete user.password

    const token = sign(
      {
        user: {
          name: user.name,
          email: user.email,
          id: user.id
        }
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    )

    return { ...user, token }
  }
}

export default AuthUserService;