import { AxiosResponse } from "axios"
import { User, UserResponse } from "../models/User"
import { api } from "./api"

export const authenticate = (data: User) => {
  return api.post("/login", data) as Promise<AxiosResponse<UserResponse, any>>;
}

export const register = (data: User) => {
  return api.post("/register", data);
}