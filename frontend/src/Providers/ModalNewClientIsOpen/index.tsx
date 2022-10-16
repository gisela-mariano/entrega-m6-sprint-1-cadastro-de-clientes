import { createContext, useState } from 'react';
import {
  IModalNewClientIsOpen,
  IReactChildren,
} from '../../interfaces/geral.interface';

const DEFAULT_VALUE = {
  modalNewClientIsOpen: false,
  setModalNewClientIsOpen: () => {},
};

export const ModalNewClientIsOpenContext =
  createContext<IModalNewClientIsOpen>(DEFAULT_VALUE);

export const ModalNewClientIsOpenProvider = ({ children }: IReactChildren) => {
  const [modalNewClientIsOpen, setModalNewClientIsOpen] = useState(
    DEFAULT_VALUE.modalNewClientIsOpen
  );

  return (
    <ModalNewClientIsOpenContext.Provider value={{ modalNewClientIsOpen, setModalNewClientIsOpen }}>
      {children}
    </ModalNewClientIsOpenContext.Provider>
  );
};
