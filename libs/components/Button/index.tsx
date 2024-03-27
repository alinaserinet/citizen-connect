import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { generateClassName } from './class-handler';
import type { Color } from './colors';
import type { Genre } from './genres';
import type { Size } from './sizes';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  genre?: Genre;
  size?: Size;
  color?: Color;
}

const Button = ({
  children,
  className,
  genre = 'fill',
  color = 'primary',
  size = 'base',
  ...rest
}: ButtonProps) => {
  const localClassName = generateClassName(genre, color, size);
  return (
    <button
      className={twMerge(
        'flex items-center justify-center gap-x-3 rounded-xl font-semibold transition-colors duration-300',
        localClassName,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
