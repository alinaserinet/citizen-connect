import type { DetailedHTMLProps, ReactNode, ThHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ThProps
  extends DetailedHTMLProps<
    ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  children?: ReactNode;
}

const Th = ({ children, className, ...rest }: ThProps) => {
  return (
    <th
      {...rest}
      className={twMerge(
        'description px-12 py-3.5 text-left font-normal text-gray-500 rtl:text-right dark:text-gray-400',
        className,
      )}
    >
      {children}
    </th>
  );
};
export default Th;
