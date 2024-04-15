import { Atom } from '@phosphor-icons/react/dist/ssr/Atom';
import { ChatCenteredText } from '@phosphor-icons/react/dist/ssr/ChatCenteredText';
// import { ShieldCheckered } from '@phosphor-icons/react/dist/ssr/ShieldCheckered';
import { User } from '@phosphor-icons/react/dist/ssr/User';
import type { MenuItem } from '@types';

const mainMenu: MenuItem[] = [
  { id: 1, href: '/dashboard', title: 'داشبورد', icon: Atom },
  { id: 2, href: '/dashboard/profile', title: 'اطلاعات کاربری', icon: User },
  // { id: 1, href: '/profile', title: 'تنظیمات امنیتی', icon: ShieldCheckered },
  {
    id: 3,
    href: '/dashboard/requests',
    title: 'درخواست مشکلات',
    icon: ChatCenteredText,
    visibility: 'user',
  },
];

export default mainMenu;
