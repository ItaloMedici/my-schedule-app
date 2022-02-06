import { Request, Response } from "express";
import AuthUserService from "../services/AuthUserService";

class AuthUserController {

  async register(req: Request, res: Response) {
    try {
      const data = req.body

      const user = await new AuthUserService().register(data)
      return res.json(user)

    } catch (error) {
      return res.json({ error: error.message })

    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = req.body

      const user = await new AuthUserService().login(data)
      return res.json(user)

    } catch (error) {
      return res.json({ error: error.message })

    }
  }
}

export default AuthUserController;