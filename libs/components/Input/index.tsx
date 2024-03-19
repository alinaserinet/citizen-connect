import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  ltr?: boolean;
}

const Input = ({ className, ltr = false, ...rest }: InputProps) => {
  return (
    <input
      type="text"
      spellCheck="false"
      autoComplete="off"
      className={twMerge(
        'mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-2.5 text-gray-700 placeholder:text-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300/40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:placeholder:text-gray-500 dark:focus:border-blue-300',
        className,
      )}
      style={{ direction: ltr ? 'ltr' : 'rtl' }}
      {...rest}
    />
  );
};
export default Input;
