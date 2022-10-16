import { AxiosError } from 'axios';
import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { ICreateClient } from '../../interfaces/client.interface';
import {
  IAccessClientApiContext,
  IReactChildren,
} from '../../interfaces/geral.interface';
import { apiAccess } from '../../services';
import { AllClientsContext } from '../AllClients';

const DEFAULT_VALUE = {
  createClient: (data: ICreateClient) => {},
  getClients: () => {},
  getOneClient: (id: string) => {},
  editClient: (id: string, name: string) => {},
  deleteClient: (id: string) => {},
};

export const AccessClientsApiContext =
  createContext<IAccessClientApiContext>(DEFAULT_VALUE);

const AccessClientApiProvider = ({ children }: IReactChildren) => {
  const { setAllClients } = useContext(AllClientsContext);

  const getUserData = localStorage.getItem('userData');
  const userData = JSON.parse(getUserData!);

  const createClient = (data: ICreateClient) => {
    apiAccess
      .post('clients', JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Cliente cadastrado!');
      })
      .catch((err: Error | AxiosError) => {
        toast.error('Cliente já cadastrado');
      });
  };

  const getClients = () => {
    apiAccess
      .get('/clients', {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => setAllClients(res.data))
      .catch((err) => console.log(err));
  };

  const getOneClient = (id: string) => {
    apiAccess
      .get(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => setAllClients(res.data))
      .catch((err) => console.log(err));
  };

  const editClient = (id: string, name: string) => {

    apiAccess
      .put(`/clients/${id}`, JSON.stringify({ name }), {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Cliente editado!');
      })
      .catch((err) => console.log(err));
  };

  const deleteClient = (id: string) => {
    apiAccess
      .delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        toast.success('Cliente deletado!');
      })
      .catch((err) => console.log(err));
  };

  return (
    <AccessClientsApiContext.Provider
      value={{
        createClient,
        getClients,
        getOneClient,
        editClient,
        deleteClient,
      }}
    >
      {children}
    </AccessClientsApiContext.Provider>
  );
};

export default AccessClientApiProvider;
