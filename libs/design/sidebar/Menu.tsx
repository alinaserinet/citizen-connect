import { MenuItem } from '@libs/components';
import { Atom } from '@phosphor-icons/react/dist/ssr/Atom';
import { NewspaperClipping } from '@phosphor-icons/react/dist/ssr/NewspaperClipping';
import { UserGear } from '@phosphor-icons/react/dist/ssr/UserGear';
import { twMerge } from 'tailwind-merge';

interface MenuProps {
  className?: string;
}

const Menu = ({ className = '' }: MenuProps) => {
  return (
    <menu className={twMerge('flex flex-col gap-3', className)}>
      <MenuItem href="/" title="صفحه اصلی" icon={Atom} />
      <MenuItem href="/" title="تنظیمات کاربر" icon={UserGear} />
      <MenuItem href="/" title="ثبت درخواست" icon={NewspaperClipping} />
    </menu>
  );
};
export default Menu;
