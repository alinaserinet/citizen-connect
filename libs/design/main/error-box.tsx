'use client';
import type { Icon } from '@phosphor-icons/react';
import { Warning } from '@phosphor-icons/react';

import { CenterWrapper } from './center-wrapper';

interface ErrorBoxProps {
  icon?: Icon;
  error: unknown;
}

const getErrorMessage = (error: unknown) => {
  if (typeof error === 'string') {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  console.error('error: ', error);

  return 'مشکلی رخ داد';
};

export const ErrorBox = ({ error, icon: Icon = Warning }: ErrorBoxProps) => {
  const errorMessage = getErrorMessage(error);
  return (
    <CenterWrapper className="min-h-52 min-w-72 rounded-xl bg-white/40 p-6 shadow-sm">
      <Icon size={40} className="text-red-500" />
      <span className="font-semibold text-red-800">{errorMessage}</span>
    </CenterWrapper>
  );
};
