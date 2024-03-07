import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      type="text"
      placeholder="John Doe"
      className="placeholder:gray-400/70  dark:placeholder:gray-500 mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300/40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
    />
  );
};
export default Input;
