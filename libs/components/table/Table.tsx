import type { DetailedHTMLProps, ReactNode, TableHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TableProps
  extends DetailedHTMLProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  children: ReactNode;
}

const Table = ({ children, className, ...rest }: TableProps) => {
  return (
    <table
      {...rest}
      className={twMerge(
        'min-w-full divide-y divide-gray-200 dark:divide-gray-700',
        className,
      )}
    >
      {children}
    </table>
  );
};
export default Table;
