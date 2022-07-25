import { api } from "./api"

export const getCustomers = () => {
  return api.get('/customers')
}