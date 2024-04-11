import { forwardRef } from 'react';

import type { SelectProps } from '.';

const SelectNormal = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, onChange, ...rest }: SelectProps, ref) => {
    if (!options.length) {
      return (
        <div className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-2.5 text-gray-700 placeholder:text-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300/40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:placeholder:text-gray-500 dark:focus:border-blue-300">
          آیتمی یافت نشد
        </div>
      );
    }

    return (
      <select
        {...rest}
        ref={ref}
        className="mt-2 block w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-5 py-2.5 text-gray-700 placeholder:text-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300/40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:placeholder:text-gray-500 dark:focus:border-blue-300"
      >
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    );
  },
);

export default SelectNormal;
