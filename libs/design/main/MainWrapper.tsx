import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface MainWrapperProps {
  children: ReactNode;
  className?: string;
}

const MainWrapper = ({ children, className }: MainWrapperProps) => {
  return (
    <main
      className={twMerge(
        'mr-0 flex flex-col gap-3 p-3 pr-1.5 lg:mr-60',
        className,
      )}
    >
      {children}
    </main>
  );
};
export default MainWrapper;
