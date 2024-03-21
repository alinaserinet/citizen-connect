import { Button } from '@libs/components';
import { LogoBar, Navbar, PageTitle, SideNav } from '@libs/design';
import { LoginBox } from '@libs/modules';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';
import type { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <SideNav className="flex flex-col gap-4 lg:start-3 lg:top-3 lg:h-[calc(100vh-1.5rem)]">
        <LogoBar logoSrc="/next.svg" className="p-3" logoHref="/dashboard" />
        <LoginBox className="p-4" />
      </SideNav>
      <main className="mr-0 flex flex-col gap-3 p-3 lg:mr-[15.75rem]">
        <Navbar className="flex items-center justify-between">
          <PageTitle title="صفحه اصلی" />
          <Button className="size-9 gap-2 rounded-full p-0 lg:w-auto lg:px-3.5">
            <Phone size={22} />
            <span className="hidden lg:inline">تماس با ما</span>
          </Button>
        </Navbar>
        <div>{children}</div>
      </main>
    </div>
  );
};
export default layout;
