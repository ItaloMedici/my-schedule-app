import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  
  static async getAll(req: Request, res: Response) {
    const result = await UserService.findAll();

    return res.json(result);
  }

  static async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await UserService.find(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
      const result = await UserService.delete(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }
}

export default UserController;