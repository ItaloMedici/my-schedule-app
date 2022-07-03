import { api } from "./api"

type UserData = {
  name?: string
  email: string
  password: string
}

export const authenticate = async (data: UserData) => {
  return await api.post("/login", data);
}

export const register = async (data: UserData) => {
  return await api.post("/register", data);
}