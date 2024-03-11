import { Button } from '@libs/components';
import { LoginBox, LogoBar, Navbar, PageTitle, SideNav } from '@libs/design';
import { Phone } from '@phosphor-icons/react/dist/ssr/Phone';

const layout = () => {
  return (
    <div className="">
      <SideNav className="flex flex-col gap-4 lg:start-3 lg:top-3 lg:h-[calc(100vh-1.5rem)]">
        <LogoBar logoSrc="/next.svg" className="p-3" logoHref="/dashboard" />
        <LoginBox className="border-0 p-0 shadow-none" />
      </SideNav>
      <main className="mr-0 p-3 lg:mr-[15.75rem]">
        <Navbar className="flex items-center justify-between">
          <PageTitle title="صفحه اصلی" />
          <Button className="h-9 rounded-full px-5">
            <Phone size={20} />
            <span>تماس با ما</span>
          </Button>
        </Navbar>
      </main>
    </div>
  );
};
export default layout;
