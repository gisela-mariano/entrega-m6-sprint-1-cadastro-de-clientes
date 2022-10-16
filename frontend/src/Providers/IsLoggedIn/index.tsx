import { createContext, useState } from 'react';
import {
  IIsLoggedIn,
  IReactChildren,
} from '../../interfaces/geral.interface';

const DEFAULT_VALUE = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const IsLoggedInContext =
  createContext<IIsLoggedIn>(DEFAULT_VALUE);

export const IsLoggedInProvider = ({ children }: IReactChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    DEFAULT_VALUE.isLoggedIn
  );

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
};
