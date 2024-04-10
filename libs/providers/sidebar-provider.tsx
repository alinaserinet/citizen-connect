'use client';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

interface Sidebar {
  isOpen: boolean;
}

const SidebarContext = createContext<Sidebar | null>(null);
const SetSidebarContext = createContext<Dispatch<
  SetStateAction<Sidebar>
> | null>(null);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebar, setSidebar] = useState<Sidebar>({ isOpen: false });
  return (
    <SetSidebarContext.Provider value={setSidebar}>
      <SidebarContext.Provider value={sidebar}>
        {children}
      </SidebarContext.Provider>
    </SetSidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const sidebar = useContext(SidebarContext);
  console.log(sidebar);

  if (!sidebar) {
    throw new Error('useSidebar must use with provider');
  }

  return sidebar;
};

export const useSetSidebar = () => {
  const setSidebar = useContext(SetSidebarContext);

  if (!setSidebar) {
    throw new Error('useSetSidebar must use with provider');
  }

  return setSidebar;
};
