import { Email } from "../entities/email.entity"
import { Phone } from "../entities/phone.entity"

export interface IContact{
  email?: string
  phone?: string
}

export interface IClientRequest{
  fullName: string
  contacts?: IContact
  token?: string
}