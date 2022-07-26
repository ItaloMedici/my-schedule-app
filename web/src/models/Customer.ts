import { User } from "./User";

export class Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  userId: string

  constructor(user: User | null, name: string = "", email: string = "", phone: string = "") {
    this.name = name;
    this.email = email;
    this.phone = phone;
    if (user) {
      this.userId = user.id;
    }
  }
}

