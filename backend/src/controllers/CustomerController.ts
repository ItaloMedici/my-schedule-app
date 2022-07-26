import { Request, Response } from "express";
import CustomerService from "../services/CustomerService";

class CustomerController {
  static async create(req: Request, res: Response) {
    const customer = req.body;
    const { userId } = req;

    try {
      const result = await CustomerService.create(customer, userId);

      return res.json(result)
    } catch (error) {
      console.log(error)
      return res.status(error?.status || 500).json({ error: error.message })
    }

  }

  static async getAll(req: Request, res: Response) {
    const { userId } = req;

    const result = await CustomerService.findAll(userId);

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