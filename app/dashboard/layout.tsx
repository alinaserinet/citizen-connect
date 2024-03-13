import {
  LogoBar,
  Menu,
  Navbar,
  PageTitle,
  SideNav,
  UserTray,
} from '@libs/design';
import type { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <SideNav
        className="flex flex-col gap-4 lg:start-3 lg:top-3 lg:h-[calc(100vh-1.5rem)]"
        opened
      >
        <LogoBar logoSrc="/next.svg" className="p-3" logoHref="/main" />
        <Menu className="p-3" />
      </SideNav>
      <main className="mr-0 flex flex-col gap-3 p-3 lg:mr-[15.75rem]">
        <Navbar className="flex items-center justify-between">
          <PageTitle title="عنوان صفحه" />
          <UserTray className="w-56" />
        </Navbar>
        <div>{children}</div>
      </main>
    </div>
  );
};
export default layout;
