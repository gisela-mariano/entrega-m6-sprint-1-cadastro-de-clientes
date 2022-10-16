import { AxiosError } from 'axios';
import { createContext } from 'react';
import { toast } from 'react-toastify';
import {
  IAccessPhoneApiContext,
  IReactChildren,
} from '../../interfaces/geral.interface';
import { apiAccess } from '../../services';

const DEFAULT_VALUE = {
  createPhone: (idClient: string, phone: string) => {},
  editPhone: (idPhone: string, phone: string) => {},
  deletePhone: (idPhone: string) => {},
};

export const AccessPhoneApiContext =
  createContext<IAccessPhoneApiContext>(DEFAULT_VALUE);

const AccessPhoneApiProvider = ({ children }: IReactChildren) => {
  const getUserData = localStorage.getItem('userData');
  const userData = JSON.parse(getUserData!);

  const createPhone = (idClient: string, phone: string) => {
    apiAccess
      .post(`clients/${idClient}/phone`, JSON.stringify(phone), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Telefone cadastrado!');
      })
      .catch((err: Error | AxiosError) => {
        toast.error('Telefone já cadastrado para esse cliente');
      });
  };

  const editPhone = (idPhone: string, phone: string) => {
    apiAccess
      .put(`clients/phone/${idPhone}`, JSON.stringify({ phone }), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Telefone editado!');
      })
      .catch((err) => console.log(err));
  };

  const deletePhone = (idPhone: string) => {
    apiAccess
      .delete(`clients/phone/${idPhone}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Telefone deletado!');
      })
      .catch((err) => console.log(err));
  };

  return (
    <AccessPhoneApiContext.Provider
      value={{
        createPhone,
        editPhone,
        deletePhone,
      }}
    >
      {children}
    </AccessPhoneApiContext.Provider>
  );
};

export default AccessPhoneApiProvider;
