import type { DetailedHTMLProps, ReactNode, TdHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TDProps
  extends DetailedHTMLProps<
    TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  children: ReactNode;
}

const TD = ({ children, className, ...rest }: TDProps) => {
  return (
    <td
      {...rest}
      className={twMerge(
        'whitespace-nowrap px-4 py-4 text-sm font-medium',
        className,
      )}
    >
      {children}
    </td>
  );
};
export default TD;
