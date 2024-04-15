import { SquaresFour } from '@phosphor-icons/react/dist/ssr/SquaresFour';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import type { MenuItemTypeProps } from './MenuItem';

const NormalMenuItem = ({
  title,
  className,
  href,
  icon,
}: MenuItemTypeProps) => {
  const IconComponent = icon ?? SquaresFour;
  return (
    <li>
      <Link
        href={href ?? '/'}
        className={twMerge(
          'flex h-10 items-center gap-3 rounded-xl bg-white px-3 text-[0.8rem] font-medium text-slate-900 transition-all delay-100 ease-linear hover:bg-slate-200',
          className,
        )}
      >
        <IconComponent size={22} className="text-sky-700" />
        <span>{title}</span>
      </Link>
    </li>
  );
};
export default NormalMenuItem;
