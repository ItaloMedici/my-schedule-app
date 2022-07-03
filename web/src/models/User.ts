export interface User {
  email: string;
  name?: string;
  password?: string;
  phone?: string;
}

export interface UserResponse extends User {
  id: string,
  token: string;
  createdAt: Date;
}