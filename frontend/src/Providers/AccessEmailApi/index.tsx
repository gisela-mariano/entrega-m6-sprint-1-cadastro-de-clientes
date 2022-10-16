import { AxiosError } from 'axios';
import { createContext } from 'react';
import { toast } from 'react-toastify';
import {
  IAccessEmailApiContext,
  IReactChildren,
} from '../../interfaces/geral.interface';
import { apiAccess } from '../../services';

const DEFAULT_VALUE = {
  createEmail: (idClient: string, email: string) => {},
  editEmail: (idEmail: string, email: string) => {},
  deleteEmail: (idEmail: string) => {},
};

export const AccessEmailApiContext =
  createContext<IAccessEmailApiContext>(DEFAULT_VALUE);

const AccessEmailApiProvider = ({ children }: IReactChildren) => {
  const getUserData = localStorage.getItem('userData');
  const userData = JSON.parse(getUserData!);

  const createEmail = (idClient: string, email: string) => {
    apiAccess
      .post(`clients/${idClient}/email`, JSON.stringify(email), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Email cadastrado!');
      })
      .catch((err: Error | AxiosError) => {
        toast.error('Email já cadastrado para esse cliente');
      });
  };

  const editEmail = (idEmail: string, email: string) => {
    apiAccess
      .put(`clients/email/${idEmail}`, JSON.stringify({ email }), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Email editado!');
      })
      .catch((err) => console.log(err));
  };

  const deleteEmail = (idEmail: string) => {
    apiAccess
      .delete(`clients/email/${idEmail}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Email deletado!');
      })
      .catch((err) => console.log(err));
  };

  return (
    <AccessEmailApiContext.Provider
      value={{
        createEmail,
        editEmail,
        deleteEmail,
      }}
    >
      {children}
    </AccessEmailApiContext.Provider>
  );
};

export default AccessEmailApiProvider;
