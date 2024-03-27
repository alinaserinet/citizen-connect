import '@libs/assets/fonts/fonts.css';
import '@libs/assets/styles/globals.css';

import { authConfig } from '@config';
import { mainMenu } from '@data/base';
import { LogoBar, MainWrapper, Menu, Sidebar, SideNav } from '@libs/design';
import { MainNavbar } from '@libs/modules';
import { UserProvider } from '@libs/providers';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getServerSession(authConfig);
  return (
    <html lang="fa" dir="rtl">
      <body className="text-[0.8rem]">
        <Sidebar opened={false}>
          <SideNav>
            <LogoBar />
            <Menu items={mainMenu} />
          </SideNav>
        </Sidebar>
        <MainWrapper>
          <MainNavbar />
          <UserProvider session={session}>{children}</UserProvider>
        </MainWrapper>
      </body>
    </html>
  );
}
