import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TrProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  children: ReactNode;
}

const Tr = ({ children, className, ...rest }: TrProps) => {
  return (
    <tr {...rest} className={twMerge(className)}>
      {children}
    </tr>
  );
};
export default Tr;
