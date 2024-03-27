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
        'fixed top-0 h-screen w-60 p-3 pl-1.5 lg:start-0',
        className,
        opened ? 'start-0' : '-start-60',
      )}
    >
      {children}
    </aside>
  );
};
export default Sidebar;
