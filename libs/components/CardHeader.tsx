import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div
      className={twMerge(
        'border-b border-gray-100 bg-gray-50 p-4 pb-3 text-center font-semibold',
        className,
      )}
    >
      {children}
    </div>
  );
};
export default CardHeader;
