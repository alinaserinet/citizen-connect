import '@libs/assets/fonts/fonts.css';
import '@libs/assets/styles/globals.css';

import { authConfig } from '@config';
import { AlertProvider, UserProvider } from '@libs/providers';
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
        <UserProvider session={session}>
          <AlertProvider>{children}</AlertProvider>
        </UserProvider>
      </body>
    </html>
  );
}
