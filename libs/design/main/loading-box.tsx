'use client';
import './loading.css';

import { Card, CardBody } from '@libs/components';

import { CenterWrapper } from './center-wrapper';

interface LoadingBoxProps {
  message?: string;
}

export const LoadingBox = ({ message = 'لطفا صبر کنید' }: LoadingBoxProps) => {
  return (
    <CenterWrapper>
      <Card className="size-52 bg-white/40">
        <CardBody className="flex h-full flex-col items-center justify-center">
          <span className="loading loading-dots loading-lg text-gray-400" />
          <span className="text-gray-700">{message}</span>
        </CardBody>
      </Card>
    </CenterWrapper>
  );
};
