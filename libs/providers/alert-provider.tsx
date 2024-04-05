'use client';
import type { Alert } from '@types';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

type SetAlertContextType = Dispatch<SetStateAction<Alert | null>>;

const AlertContext = createContext<Alert | null | undefined>(undefined);
const SetAlertContext = createContext<SetAlertContextType | undefined>(
  undefined,
);

interface AlertProviderProps {
  children: ReactNode;
  value?: Alert | null;
}

export const AlertProvider = ({
  children,
  value = null,
}: AlertProviderProps) => {
  const [alert, setAlert] = useState<Alert | null>(value);
  return (
    <SetAlertContext.Provider value={setAlert}>
      <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>
    </SetAlertContext.Provider>
  );
};

export const useAlert = () => {
  const alert = useContext(AlertContext);

  if (alert === undefined) {
    throw new Error('useAlert must use with provider');
  }

  return alert;
};

export const useSetAlert = () => {
  const setAlert = useContext(SetAlertContext);

  if (setAlert === undefined) {
    throw new Error('useSetAlert must use with provider');
  }

  return setAlert;
};
