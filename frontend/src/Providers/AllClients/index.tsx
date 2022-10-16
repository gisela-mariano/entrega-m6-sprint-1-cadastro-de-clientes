import { createContext, useState } from "react";
import { IAllClients, IReactChildren } from "../../interfaces/geral.interface";

const DEFAULT_VALUE = {
  allClients: [],
  setAllClients: () => {},
};

export const AllClientsContext =
  createContext<IAllClients>(DEFAULT_VALUE);

export const AllClientsProvider = ({ children }: IReactChildren) => {
  const [allClients, setAllClients] = useState(DEFAULT_VALUE.allClients);

  return (
    <AllClientsContext.Provider value={{ allClients, setAllClients }}>
      {children}
    </AllClientsContext.Provider>
  );
};