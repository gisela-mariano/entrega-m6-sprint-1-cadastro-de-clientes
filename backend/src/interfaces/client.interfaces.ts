import { Email } from '../entities/email.entity';
import { Phone } from '../entities/phone.entity';

export interface IPhone {
  phone: string;
}

export interface IEmail {
  phone: string;
}

export interface IContact {
  emails?: string[];
  phones?: string[];
}

export interface IClientRequest {
  name: string;
  contacts?: IContact;
  token?: string;
}

export interface IClientUpdateRequest {
  idClient: string;
  name: string;
}
