import type { MenuItem as MenuItemType } from '@types';
import { twMerge } from 'tailwind-merge';

import MenuItem from './MenuItem';

interface MenuProps {
  className?: string;
  items: MenuItemType[];
  userRole?: 'employee' | 'user';
}

const Menu = ({ className = '', items, userRole }: MenuProps) => {
  const itemsList = items.map(item => {
    if (item.visibility && item.visibility !== userRole) {
      return null;
    }

    return (
      <MenuItem
        key={item.id}
        type={'subMenu' in item ? 'dropDown' : 'normal'}
        {...item}
      />
    );
  });
  return (
    <menu className={twMerge('flex flex-col gap-3', className)}>
      {itemsList}
    </menu>
  );
};
export default Menu;
