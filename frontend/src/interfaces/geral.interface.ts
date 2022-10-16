import React, { ReactNode, SetStateAction } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons/lib';
import { ICreateClient, ICreatedClient } from './client.interface';
import { ICreateEmail } from './email.interface';
import { ICreatePhone } from './phone.interface';
import { ICreateUser, ILoginUser } from './user.interface';

export interface IRegisterInput {
  icon: IconType;
  placeholder: string;
  register: UseFormRegister<
    ICreateUser | ILoginUser | ICreateClient | ICreateEmail | ICreatePhone
  >;
  name: 'name' | 'email' | 'email2' | 'phone' | 'phone2' | 'password';
  error?: string;
  label: string;
  [x: string]: any;
}

export interface IAccessClientApiContext {
  createClient: (data: ICreateClient) => void;
  getClients: () => void;
  getOneClient: (id: string) => void;
  editClient: (id: string, name: string) => void;
  deleteClient: (id: string) => void;
}

export interface IAccessEmailApiContext {
  createEmail: (idClient: string, email: string) => void;
  editEmail: (idEmail: string, email: string) => void;
  deleteEmail: (idEmail: string) => void;
}

export interface IAccessPhoneApiContext {
  createPhone: (idClient: string, phone: string) => void;
  editPhone: (idPhone: string, phone: string) => void;
  deletePhone: (idPhone: string) => void;
}

export interface IIsInLoginPageContext {
  isInLoginPage: boolean;
  setIsInLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalNewClientIsOpen {
  modalNewClientIsOpen: boolean;
  setModalNewClientIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalEditClientIsOpen {
  modalEditClientIsOpen: boolean;
  setModalEditClientIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalCreateEmailIsOpen {
  modalCreateEmailIsOpen: boolean;
  setModalCreateEmailIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalCreatePhoneIsOpen {
  modalCreatePhoneIsOpen: boolean;
  setModalCreatePhoneIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IIsLoggedIn {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAllClients {
  allClients: ICreatedClient[];
  setAllClients:
    | React.Dispatch<React.SetStateAction<ICreatedClient>>
    | React.Dispatch<SetStateAction<never[]>>;
}

export interface IClient {
  client: ICreatedClient;
  setClient: React.Dispatch<React.SetStateAction<ICreatedClient>>;
}

export interface IReactChildren {
  children: ReactNode | ReactNode[];
}

export interface IModalOpen {
  isOpen: boolean;
}

export interface ICardClientProps {
  clientData: ICreatedClient;
}

export interface IGetClientsProps {
  getClients: () => void;
}

export interface IPropsInput {
  isErrored: boolean;
}
