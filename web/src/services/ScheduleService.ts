import { ISchedule, Schedule } from "../models/Schedule";
import { api } from "./api";

export const buildFeed = async () => {
  return await api.get("/build-feed");
}

export const getSchedule = async (idSchedule: string | number) => {
  return await api.get('/schedule/' + idSchedule);
}

export const saveOrUpdateSchedule = (schedule: ISchedule) => {
  return api.post('/schedule', schedule)
}

export const deleteSchedule = (idSchedule: string) => {
  return api.delete('/schedule/' + idSchedule)
}