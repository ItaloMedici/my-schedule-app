import { Request, Response } from "express";
import { HttpError } from "http-errors";
import { ErrorResponse } from "../models/error";
import AuthUserService from "../services/AuthUserService";

class AuthUserController {

  static async register(req: Request, res: Response) {
    try {
      const data = req.body

      const user = await AuthUserService.register(data)
      return res.json(user)

    } catch (error) {
      return res.status(409).json(new ErrorResponse(
        "emailAlreadyUsed",
        409
      ))
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const data = req.body

      const user = await AuthUserService.login(data)
      return res.json(user)

    } catch (error) {
      return res.status(error.status).json(new ErrorResponse(
        error.message,
        error.status
      ))
    }
  }
}

export default AuthUserController;