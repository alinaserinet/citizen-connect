'use client';

import type { SessionProviderProps } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

type UserProviderProps = SessionProviderProps;

const UserProvider = ({ children, ...rest }: UserProviderProps) => {
  return <SessionProvider {...rest}>{children}</SessionProvider>;
};
export default UserProvider;
