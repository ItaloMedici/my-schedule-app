import { Request, Response } from "express";
import ClientService from "../services/ClientService";

class ClientController {
  static async create(req: Request, res: Response) {
    const client = req.body;
    try {
      const result = await ClientService.create(client);
      
      return res.json(result)
    } catch (error) {
      return res.json({error: error.message})
    }

  }

  static async getAll(req: Request, res: Response) {
    const result = await ClientService.findAll();

    return res.json(result);
  }

  static async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await ClientService.find(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
      const result = await ClientService.delete(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }
}

export default ClientController;