import { createContext, useState } from 'react';
import {
  IModalCreateEmailIsOpen,
  IReactChildren,
} from '../../interfaces/geral.interface';

const DEFAULT_VALUE = {
  modalCreateEmailIsOpen: false,
  setModalCreateEmailIsOpen: () => {},
};

export const ModalCreateEmailIsOpenContext =
  createContext<IModalCreateEmailIsOpen>(DEFAULT_VALUE);

export const ModalCreateEmailIsOpenProvider = ({
  children,
}: IReactChildren) => {
  const [modalCreateEmailIsOpen, setModalCreateEmailIsOpen] = useState(
    DEFAULT_VALUE.modalCreateEmailIsOpen
  );

  return (
    <ModalCreateEmailIsOpenContext.Provider
      value={{ modalCreateEmailIsOpen, setModalCreateEmailIsOpen }}
    >
      {children}
    </ModalCreateEmailIsOpenContext.Provider>
  );
};
