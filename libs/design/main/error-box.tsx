'use client';
import { Card, CardBody } from '@libs/components';
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
    <CenterWrapper>
      <Card className="size-52 bg-white/40">
        <CardBody className="flex h-full flex-col items-center justify-center gap-3">
          <Icon size={40} className="text-red-500" />
          <span className="text-center font-semibold leading-7 text-red-800">
            {errorMessage}
          </span>
        </CardBody>
      </Card>
    </CenterWrapper>
  );
};
