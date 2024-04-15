import { authConfig } from '@config';
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
import { jwtDecode } from 'jwt-decode';
import { getServerSession } from 'next-auth';
import type { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const session = await getServerSession(authConfig);
  const { isEmployee } = jwtDecode<{ isEmployee: boolean }>(
    session?.user.accessToken ?? '',
  );
  return (
    <>
      <Sidebar>
        <SideNav>
          <LogoBar logoSrc="/next.svg" />
          <Menu items={mainMenu} userRole={isEmployee ? 'employee' : 'user'} />
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
