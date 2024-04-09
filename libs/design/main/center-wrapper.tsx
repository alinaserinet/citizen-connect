import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CenterWrapperProps {
  children: ReactNode;
  className?: string;
  mobile?: boolean;
}

export const CenterWrapper = ({
  children,
  className,
  mobile = true,
}: CenterWrapperProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full flex-col items-center justify-center gap-3',
        mobile
          ? 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          : 'lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2',
        className,
      )}
    >
      {children}
    </div>
  );
};
