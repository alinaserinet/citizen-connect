import { Card } from '@libs/components';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

const Navbar = ({ children, className = '' }: NavbarProps) => {
  return (
    <Card className={twMerge('h-14 bg-blue-900 p-3 text-white', className)}>
      {children}
    </Card>
  );
};
export default Navbar;
