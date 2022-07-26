import { User } from "./User";

export class Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  userId: string

  constructor(name: string = "", email: string = "", phone: string = "") {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

