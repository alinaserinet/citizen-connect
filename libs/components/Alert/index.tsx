'use client';
import { twMerge } from 'tailwind-merge';

import { generateClassName } from './class-handler';
import type { Color } from './colors';
import type { Genre } from './genres';
import icons from './icons';

interface AlertProps {
  message: string;
  hint?: string;
  color?: Color;
  fill?: boolean;
  genre?: Genre;
  className?: string;
}

const Alert = ({
  message,
  hint,
  className,
  color = 'info',
  fill = false,
  genre = 'pop',
}: AlertProps) => {
  const classNames = generateClassName(color, genre, fill);
  const Icon = icons[color];

  return (
    <div
      className={twMerge(
        'flex w-full max-w-sm overflow-hidden rounded-lg shadow-sm',
        classNames.root,
        className,
      )}
    >
      <div
        className={twMerge(
          'flex w-12 items-center justify-center',
          classNames.icon,
        )}
      >
        <Icon size={32} />
      </div>
      <div className={twMerge('-mx-3 px-4 py-2', classNames.main)}>
        <div className="mx-3 flex flex-col gap-2">
          <span className={twMerge('font-semibold', classNames.message)}>
            {message}
          </span>
          {hint ? (
            <p className={twMerge('text-xs', classNames.hint)}>{hint}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Alert;
