'use client';
import { Avatar, Card, CardBody } from '@libs/components';
import { User } from '@phosphor-icons/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import ToolItem from './ToolItem';

interface UserTrayProps {
  className?: string;
  userTitle: string;
}

const UserTray = ({ className, userTitle }: UserTrayProps) => {
  const toolboxRef = useRef<HTMLDivElement>(null);

  const handleToggleToolbox = () => {
    toolboxRef.current?.classList.toggle('opacity-0');
    toolboxRef.current?.classList.toggle('z-[-1]');
    toolboxRef.current?.classList.toggle('z-50');
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className={twMerge('flex justify-end gap-4', className)}>
      <button onClick={handleToggleToolbox}>
        <Avatar />
      </button>
      <Card
        className="absolute left-3 top-20 z-[-1] w-52 text-[0.8rem] opacity-0 shadow-lg transition-all ease-in-out"
        ref={toolboxRef}
      >
        <CardBody className="border-0 p-0">
          <ul>
            <ToolItem>
              <User size={20} className="text-gray-500" />
              <span>{userTitle}</span>
            </ToolItem>
            <ToolItem>
              <Link href="/dashboard/profile">مشاهده پروفایل</Link>
            </ToolItem>
            <ToolItem className="border-t border-red-500 p-0 text-center">
              <button
                onClick={handleSignOut}
                className="block w-full bg-red-500 p-3 font-semibold text-white"
              >
                خروج از حساب
              </button>
            </ToolItem>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};
export default UserTray;
