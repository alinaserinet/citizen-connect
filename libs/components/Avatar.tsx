import { User } from '@phosphor-icons/react/dist/ssr/User';
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
  className?: string;
}

const Avatar = ({ className = '' }: AvatarProps) => {
  return (
    <div
      className={twMerge(
        'relative flex h-10 w-10 flex-col items-center justify-center rounded-full text-gray-400 ring-2 ring-gray-200',
        className,
      )}
    >
      <User size={28} className="text-inherit" />
      <span className="absolute bottom-0.5 right-0.5 size-2 rounded-full bg-emerald-500 ring-2 ring-white" />
    </div>
  );
};
export default Avatar;
