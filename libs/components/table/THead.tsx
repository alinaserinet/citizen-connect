import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface THeadProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {
  children: ReactNode;
}

const THead = ({ children, className, ...rest }: THeadProps) => {
  return (
    <thead
      {...rest}
      className={twMerge('bg-gray-50 dark:bg-gray-800', className)}
    >
      {children}
    </thead>
  );
};
export default THead;
