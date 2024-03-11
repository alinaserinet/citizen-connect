import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div
      className={twMerge(
        'rounded-xl bg-white shadow-md dark:bg-gray-800',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Card;
