import { createContext, useState } from 'react';
import {
  IModalEditClientIsOpen,
  IReactChildren,
} from '../../interfaces/geral.interface';

const DEFAULT_VALUE = {
  modalEditClientIsOpen: false,
  setModalEditClientIsOpen: () => {},
};

export const ModalEditClientIsOpenContext =
  createContext<IModalEditClientIsOpen>(DEFAULT_VALUE);

export const ModalEditClientIsOpenProvider = ({ children }: IReactChildren) => {
  const [modalEditClientIsOpen, setModalEditClientIsOpen] = useState(
    DEFAULT_VALUE.modalEditClientIsOpen
  );

  return (
    <ModalEditClientIsOpenContext.Provider value={{ modalEditClientIsOpen, setModalEditClientIsOpen }}>
      {children}
    </ModalEditClientIsOpenContext.Provider>
  );
};
