import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TbodyProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {
  children: ReactNode;
}

const Tbody = ({ children, className, ...rest }: TbodyProps) => {
  return (
    <tbody
      {...rest}
      className={twMerge(
        'divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900',
        className,
      )}
    >
      {children}
    </tbody>
  );
};
export default Tbody;
