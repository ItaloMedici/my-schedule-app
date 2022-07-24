import { api } from "./api";

export const buildFeed = async () => {
  return await api.get("/build-feed");
}

export const getSchedule = async (idSchedule: string | number) => {
  return await api.get('/schedule/' + idSchedule);
}