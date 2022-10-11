export interface IUserResponse{
  id: string,
  name: string,
  email: string
}

export interface IUserRequest{
  name: string,
  email: string,
  password: string
}

export interface IUserRequestWithoutPassword{
  id: string
  name: string,
  email: string,
  password?: string
}

export interface IUserLoginRequest{
  email: string
  password: string,
}

export interface IToken {
  name: string,
  email: string,
  id_user: string,
  iat: number,
  exp: number
}