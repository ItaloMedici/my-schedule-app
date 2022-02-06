import { Request, Response } from "express";
import ScheduleService from "../services/ScheduleService";

class ScheduleController {

  static async create(req: Request, res: Response) {
    const schedule = req.body;
    const { userId } = req;

    const result = await ScheduleService.create(schedule, userId);

    return res.json(result)
    
  }
}

export default ScheduleController;