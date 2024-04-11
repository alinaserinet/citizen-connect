import { mainMenu } from '@data/base';
import {
  AlertBox,
  LogoBar,
  MainWrapper,
  Menu,
  Sidebar,
  SideNav,
} from '@libs/design';
import { MainNavbar } from '@libs/modules';
import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Sidebar>
        <SideNav>
          <LogoBar logoSrc="/next.svg" />
          <Menu items={mainMenu} />
        </SideNav>
      </Sidebar>
      <MainWrapper className="relative min-h-screen">
        <MainNavbar />
        <AlertBox />
        {children}
      </MainWrapper>
    </>
  );
};
export default DashboardLayout;
