import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center gap-x-3 rounded-xl border border-transparent px-8 py-2.5 text-sm  transition-colors duration-300 sm:text-base',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
