import { Request, Response } from "express";
import { Schedule } from "../models";
import CreateScheduleService from "../services/CreateScheduleService";


class CreateScheduleController {

  async handle(req: Request, res: Response) {
    const schedule = req.body;
    const { userId } = req;

    const service = new CreateScheduleService();

    const result = await service.execute(schedule, userId);

    return res.json(result)
    
  }
}

export default CreateScheduleController;