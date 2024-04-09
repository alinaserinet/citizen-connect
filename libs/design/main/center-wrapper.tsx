import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CenterWrapperProps {
  children: ReactNode;
  className?: string;
}

export const CenterWrapper = ({ children, className }: CenterWrapperProps) => {
  return (
    <div
      className={twMerge(
        'absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3',
        className,
      )}
    >
      {children}
    </div>
  );
};
