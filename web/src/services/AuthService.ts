import { AxiosResponse } from "axios"
import { User, UserResponse } from "../models/User"
import { api } from "./api"

export const authenticate = async (data: User) => {
  return api.post("/login", data) as Promise<AxiosResponse<UserResponse, any>>;
}

export const register = async (data: User) => {
  return await api.post("/register", data);
}