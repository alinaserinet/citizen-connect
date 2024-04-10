'use client';
import { useSidebar } from '@libs/providers';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SidebarProps {
  children: ReactNode;
  className?: string;
}

const Sidebar = ({ children, className }: SidebarProps) => {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={twMerge(
        'fixed top-0 z-50 h-screen w-60 lg:start-0 lg:p-3 lg:pl-1.5',
        className,
        isOpen ? 'start-0' : '-start-60',
      )}
    >
      {children}
    </aside>
  );
};
export default Sidebar;
