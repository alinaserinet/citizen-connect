import type { DetailedHTMLProps, ReactNode, ThHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface THProps
  extends DetailedHTMLProps<
    ThHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  children: ReactNode;
}

const TH = ({ children, className, ...rest }: THProps) => {
  return (
    <th
      {...rest}
      className={twMerge(
        'px-12 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right dark:text-gray-400',
        className,
      )}
    >
      {children}
    </th>
  );
};
export default TH;
