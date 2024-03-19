import type { Icon } from '@phosphor-icons/react';

export default interface MenuItem {
  id: number;
  href?: string;
  title: string;
  icon?: Icon;
  description?: string;
  subMenu?: MenuItem[];
}
