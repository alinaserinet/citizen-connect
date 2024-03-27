import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...rest }: CardProps, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
export default Card;
