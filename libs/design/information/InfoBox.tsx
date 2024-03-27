import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InfoBoxProps {
  children: ReactNode;
  className?: string;
}

const InfoBox = ({ children, className }: InfoBoxProps) => {
  return (
    <ul
      className={twMerge('grid grid-cols-1 gap-10 md:grid-cols-2', className)}
    >
      {children}
    </ul>
  );
};
export default InfoBox;
