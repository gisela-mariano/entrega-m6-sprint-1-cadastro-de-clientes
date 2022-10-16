import { createContext, useState } from 'react';
import {
  IIsInLoginPageContext,
  IReactChildren,
} from '../../interfaces/geral.interface';

const DEFAULT_VALUE = {
  isInLoginPage: false,
  setIsInLoginPage: () => {},
};

export const IsInLoginPageContext =
  createContext<IIsInLoginPageContext>(DEFAULT_VALUE);

export const IsInLoginPageProvider = ({ children }: IReactChildren) => {
  const [isInLoginPage, setIsInLoginPage] = useState(
    DEFAULT_VALUE.isInLoginPage
  );

  return (
    <IsInLoginPageContext.Provider value={{ isInLoginPage, setIsInLoginPage }}>
      {children}
    </IsInLoginPageContext.Provider>
  );
};
