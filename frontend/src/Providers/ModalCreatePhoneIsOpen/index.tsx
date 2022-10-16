import { createContext, useState } from 'react';
import {
  IModalCreatePhoneIsOpen,
  IReactChildren,
} from '../../interfaces/geral.interface';

const DEFAULT_VALUE = {
  modalCreatePhoneIsOpen: false,
  setModalCreatePhoneIsOpen: () => {},
};

export const ModalCreatePhoneIsOpenContext =
  createContext<IModalCreatePhoneIsOpen>(DEFAULT_VALUE);

export const ModalCreatePhoneIsOpenProvider = ({
  children,
}: IReactChildren) => {
  const [modalCreatePhoneIsOpen, setModalCreatePhoneIsOpen] = useState(
    DEFAULT_VALUE.modalCreatePhoneIsOpen
  );

  return (
    <ModalCreatePhoneIsOpenContext.Provider
      value={{ modalCreatePhoneIsOpen, setModalCreatePhoneIsOpen }}
    >
      {children}
    </ModalCreatePhoneIsOpenContext.Provider>
  );
};
