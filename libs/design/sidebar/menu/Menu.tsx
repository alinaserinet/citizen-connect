import type { MenuItem as MenuItemType } from '@types';
import { twMerge } from 'tailwind-merge';

import MenuItem from './MenuItem';

interface MenuProps {
  className?: string;
  items: MenuItemType[];
}

const Menu = ({ className = '', items }: MenuProps) => {
  const itemsList = items.map(item => (
    <MenuItem
      key={item.id}
      type={'subMenu' in item ? 'dropDown' : 'normal'}
      {...item}
    />
  ));
  return (
    <menu className={twMerge('flex flex-col gap-3', className)}>
      {itemsList}
    </menu>
  );
};
export default Menu;
