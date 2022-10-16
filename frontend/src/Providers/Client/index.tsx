import { createContext, useState } from 'react';
import { IClient, IReactChildren } from '../../interfaces/geral.interface';

const DEFAULT_VALUE = {
  client: {
    id: '',
    name: '',
    createdAt: '',
    emails: [{ id: '', email: '' }],
    phones: [{ id: '', phone_number: '' }],
  },
  setClient: () => {},
};

export const ClientContext = createContext<IClient>(DEFAULT_VALUE);

export const ClientProvider = ({ children }: IReactChildren) => {
  const [client, setClient] = useState(DEFAULT_VALUE.client);

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
};
