import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface TopBarProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
}

const TopBar = ({ className, logoSrc, logoAlt, logoHref }: TopBarProps) => {
  return (
    <div
      className={twMerge(
        'flex h-16 flex-col items-center justify-center',
        className,
      )}
    >
      {logoSrc ? (
        <Link href={logoHref ?? '/'}>
          <Image
            src={logoSrc}
            alt={logoAlt ?? 'app logo'}
            height={0}
            width={120}
          />
        </Link>
      ) : null}
    </div>
  );
};
export default TopBar;
