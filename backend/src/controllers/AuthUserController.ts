import { Request, Response } from "express";
import AuthUserService from "../services/AuthUserService";

class AuthUserController {

  static async register(req: Request, res: Response) {
    try {
      const data = req.body

      const user = await AuthUserService.register(data)
      return res.json(user)

    } catch (error) {
      return res.json({ error: error.message })

    }
  }

  static async login(req: Request, res: Response) {
    try {
      const data = req.body

      const user = await AuthUserService.login(data)
      return res.json(user)

    } catch (error) {
      return res.json({ error: error.message })

    }
  }
}

export default AuthUserController;