import { AxiosResponse } from "axios"
import { User, UserResponse } from "../models/User"
import { api } from "./api"

export const authenticate = ({ email, password }: User) => {
  return api.post("/login", { email, password }) as Promise<AxiosResponse<UserResponse, any>>;
}

export const register = ({ email, password, name }: User) => {
  return api.post("/register", { email, password, name });
}