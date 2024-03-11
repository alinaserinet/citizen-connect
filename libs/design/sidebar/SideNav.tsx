import { Card } from '@libs/components';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SideNavProps {
  opened?: boolean;
  className?: string;
  children: ReactNode;
}

const SideNav = ({
  opened = false,
  className = '',
  children,
}: SideNavProps) => {
  return (
    <Card
      className={twMerge(
        'fixed top-0 h-screen w-60 rounded-none lg:h-[calc(100vh-1.75rem)] lg:rounded-xl',
        className,
        opened ? 'start-0' : '-start-60',
      )}
    >
      {children}
    </Card>
  );
};
export default SideNav;
