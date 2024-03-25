import { Card } from '@libs/components';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SideNavProps {
  className?: string;
  children: ReactNode;
}

const SideNav = ({ className, children }: SideNavProps) => {
  return (
    <Card
      className={twMerge('h-full rounded-none p-3 lg:rounded-xl', className)}
    >
      {children}
    </Card>
  );
};
export default SideNav;
