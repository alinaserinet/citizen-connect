import { Card } from '@libs/components';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { SidebarButton } from './sidebar-button';

interface SideNavProps {
  className?: string;
  children: ReactNode;
}

const SideNav = ({ className, children }: SideNavProps) => {
  return (
    <Card
      className={twMerge(
        'h-full rounded-none bg-slate-100 p-3 lg:rounded-xl',
        className,
      )}
    >
      <SidebarButton />
      {children}
    </Card>
  );
};
export default SideNav;
