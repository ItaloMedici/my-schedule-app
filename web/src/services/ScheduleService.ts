import { api } from "./api";

export const buildFeed = async () => {
  return await api.get("/build-feed");
}