import { Avatar } from '@libs/components';
import { twMerge } from 'tailwind-merge';

interface UserTrayProps {
  className?: string;
}

const UserTray = ({ className }: UserTrayProps) => {
  return (
    <div className={twMerge('flex justify-end gap-4', className)}>
      <Avatar />
    </div>
  );
};
export default UserTray;
