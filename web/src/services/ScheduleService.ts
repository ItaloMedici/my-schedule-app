import { api } from "./api";

export const getAllSchedule = async () => {
  return await api.get("/schedules");
}