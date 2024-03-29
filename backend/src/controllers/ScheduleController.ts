import { Request, Response } from "express";
import ScheduleService from "../services/ScheduleService";
import { buildSheduleFeed } from "../util/scheduleBuilder";

class ScheduleController {

  static async createOrUpdate(req: Request, res: Response) {
    const schedule = req.body;
    const { userId } = req;

    try {
      const result = await ScheduleService.createOrUpdate(schedule, userId);
      return res.json(result)

    } catch (error) {
      console.log(error)
      res.status(error?.status || 500).json({ error: error.message })
    }

    
  }
  
  static async getAll(req: Request, res: Response) {
    const { userId } = req;
    try {
      const result = await ScheduleService.findAll(userId);
      
      return res.json(result);

    } catch (err) {
      res.status(404).json({ error: err.message })
    }
  }

  static async buildFeed(req: Request, res: Response) {
    const { userId } = req;
    try {
      const result = await ScheduleService.findAll(userId);
      const feed = buildSheduleFeed(result)
      
      return res.json(feed);

    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static async get(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const result = await ScheduleService.find(id)

      return res.json(result);

    } catch (err) {
      res.status(404).json({ error: err.message })
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
      const result = await ScheduleService.delete(id)

      return res.json(result);

    } catch (err) {
      res.status(404).json({ error: err.message })
    }
  }
}

export default ScheduleController;