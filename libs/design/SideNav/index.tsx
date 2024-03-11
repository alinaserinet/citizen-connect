import { Card } from '@libs/components';
import { twMerge } from 'tailwind-merge';

interface SideNavProps {
  opened?: boolean;
}

const SideNav = ({ opened = false }: SideNavProps) => {
  return (
    <Card
      className={twMerge(
        'fixed top-0 h-screen w-60 rounded-none p-4 lg:start-4 lg:top-4 lg:h-[calc(100vh-2rem)] lg:rounded-xl',
        opened ? 'start-0' : '-start-60',
      )}
    >
      SideNav
    </Card>
  );
};
export default SideNav;
