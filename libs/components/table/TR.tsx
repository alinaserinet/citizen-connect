import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TRProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  children: ReactNode;
}

const TR = ({ children, className, ...rest }: TRProps) => {
  return (
    <tr {...rest} className={twMerge(className)}>
      {children}
    </tr>
  );
};
export default TR;
