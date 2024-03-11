import { Card } from '@libs/components';
import { twMerge } from 'tailwind-merge';

interface SideNavProps {
  opened?: boolean;
  className?: string;
}

const SideNav = ({ opened = false, className = '' }: SideNavProps) => {
  return (
    <Card
      className={twMerge(
        'fixed top-0 h-screen w-60 rounded-none p-4 lg:h-[calc(100vh-1.75rem)] lg:rounded-xl',
        className,
        opened ? 'start-0' : '-start-60',
      )}
    >
      SideNav
    </Card>
  );
};
export default SideNav;
