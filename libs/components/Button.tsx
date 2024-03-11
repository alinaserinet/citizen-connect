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
        'bg-emerald-600 flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-xl hover:bg-emerald-600/80 duration-300 transition-colors border border-transparent px-8 py-3',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
