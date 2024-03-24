import type { LabelHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ className, htmlFor, children, ...rest }: LabelProps) => {
  return (
    <label
      {...rest}
      htmlFor={htmlFor}
      className={twMerge(
        'mr-2.5 cursor-pointer text-gray-700 dark:text-gray-200',
        className,
      )}
    >
      {children}
    </label>
  );
};
export default Label;
