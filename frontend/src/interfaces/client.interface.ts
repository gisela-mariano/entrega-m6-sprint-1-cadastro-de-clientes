export interface ICreateClient {
  name?: string;
  email?: string;
  email2?: string;
  phone?: string;
  phone2?: string;
}

export interface IClientEmail {
  id: string;
  email: string;
}

export interface IClientPhone {
  id: string;
  phone_number: string;
}

export interface ICreatedClient {
  id: string;
  name: string;
  createdAt: string;
  emails: IClientEmail[];
  phones: IClientPhone[];
}

export interface ICreatedClientState {
  id: string;
  name?: string;
  createdAt?: string;
  emails?: IClientEmail[];
  phones?: IClientPhone[];
}

export interface IIdClientProps {
  idClient: string
}