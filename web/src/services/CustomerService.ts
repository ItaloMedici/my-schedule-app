import { Customer } from "../models/Customer"
import { api } from "./api"

export const getCustomers = () => {
  return api.get('/customers')
}

export const saveCustomer = (customer: Customer) => {
  return api.post('/customer', customer)
}