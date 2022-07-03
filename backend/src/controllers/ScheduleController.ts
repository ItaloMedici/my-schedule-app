import { Request, Response } from "express";
import ScheduleService from "../services/ScheduleService";

class ScheduleController {

  static async create(req: Request, res: Response) {
    const schedule = req.body;
    const { userId } = req;

    const result = await ScheduleService.create(schedule, userId);

    return res.json(result)
    
  }
  
  static async getAll(req: Request, res: Response) {
    const { userId } = req;
    try {
      console.log(req)
      const result = await ScheduleService.findAll(userId);
      
      return res.json(result);

    } catch (err) {
      res.status(404).json({ error: err.message })
    }
  }

  static async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await ScheduleService.find(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
      const result = await ScheduleService.delete(id)

      return res.json(result);

    } catch (err) {
      res.json({ error: err.message })
    }
  }
}

export default ScheduleController;