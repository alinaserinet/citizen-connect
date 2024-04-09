'use client';
import type { Icon } from '@phosphor-icons/react';
import { Warning } from '@phosphor-icons/react';

import { CenterWrapper } from './center-wrapper';

interface ErrorBoxProps {
  icon?: Icon;
  error: unknown;
}

export const ErrorBox = ({ error, icon: Icon = Warning }: ErrorBoxProps) => {
  if (typeof error === 'string') {
    return (
      <CenterWrapper className="rounded-xl bg-white p-6 text-red-900 shadow-sm">
        <Icon size={40} className="text-red-700" />
        <span>{error}</span>
      </CenterWrapper>
    );
  }

  if (error instanceof Error) {
    return (
      <CenterWrapper>
        <Icon />
        <span>{error.message}</span>
      </CenterWrapper>
    );
  }

  console.error(error);

  return (
    <CenterWrapper>
      <Icon />
      <span>مشکلی رخ داد</span>
    </CenterWrapper>
  );
};
