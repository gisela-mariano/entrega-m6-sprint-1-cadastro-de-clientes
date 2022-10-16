export interface ICreateUser {
  name?: string;
  email?: string;
  password?: string;
}

export interface ICreatedUser {
  id: string;
  name: string;
  email: string;
}

export interface ILoginUser {
  email?: string;
  password?: string;
}
