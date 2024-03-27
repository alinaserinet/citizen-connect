import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ToolItemProps {
  children: ReactNode;
  className?: string;
}

const ToolItem = ({ children, className }: ToolItemProps) => {
  return (
    <li
      className={twMerge(
        'flex items-center justify-center gap-2 border-t p-3 first-of-type:border-t-0',
        className,
      )}
    >
      {children}
    </li>
  );
};
export default ToolItem;
