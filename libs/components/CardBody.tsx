import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardBodyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const CardBody = ({ children, className, ...rest }: CardBodyProps) => {
  return (
    <div className={twMerge('p-4 pt-3', className)} {...rest}>
      {children}
    </div>
  );
};
export default CardBody;
