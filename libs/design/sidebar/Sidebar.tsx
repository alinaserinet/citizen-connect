import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SidebarProps {
  children: ReactNode;
  className?: string;
  opened?: boolean;
}

const Sidebar = ({ children, className, opened = false }: SidebarProps) => {
  return (
    <aside
      className={twMerge(
        'fixed top-0 z-50 h-screen w-60 lg:start-0 lg:p-3 lg:pl-1.5',
        className,
        opened ? 'start-0' : '-start-60',
      )}
    >
      {children}
    </aside>
  );
};
export default Sidebar;
