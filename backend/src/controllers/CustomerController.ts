import { Request, Response } from "express";
import CustomerService from "../services/CustomerService";

class CustomerController {
  static async create(req: Request, res: Response) {
    const client = req.body;
    try {
      const result = await CustomerService.create(client);
      
      return res.json(result)
    } catch (error) {
      return res.json({error: error.message})
    }

  }

  static async getAll(req: Request, res: Response) {
    const result = await CustomerService.findAll();

    return res.json(result);
  }

  static async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await CustomerService.find(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
      const result = await CustomerService.delete(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }
}

export default CustomerController;