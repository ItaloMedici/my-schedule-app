import { Request, Response } from "express";
import ClientService from "../services/ClientService";

class ClientController {
  static async create(req: Request, res: Response) {
    const client = req.body;

    const result = await ClientService.create(client);

    return res.json(result)
  }
}

export default ClientController;