import type { MenuItem as MenuItemType } from '@types';
import type { FC } from 'react';

import DropDownMenuItem from './DropDownMenuItem';
import NormalMenuItem from './NormalMenuItem';

type ItemType = 'dropDown' | 'normal';

interface MenuItemProps extends MenuItemType {
  className?: string;
  type: ItemType;
}

export type MenuItemTypeProps = Omit<MenuItemProps, 'type'>;

const itemTypesComponents: Record<ItemType, FC<MenuItemTypeProps>> = {
  dropDown: DropDownMenuItem,
  normal: NormalMenuItem,
};

const MenuItem = ({ type, ...rest }: MenuItemProps) => {
  const ItemTypeComponent = itemTypesComponents[type];

  return <ItemTypeComponent {...rest} />;
};
export default MenuItem;
