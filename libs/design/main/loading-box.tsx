'use client';
import './loading.css';

import { CenterWrapper } from './center-wrapper';

interface LoadingBoxProps {
  message?: string;
}

export const LoadingBox = ({ message = 'لطفا صبر کنید' }: LoadingBoxProps) => {
  return (
    <CenterWrapper className="min-h-52 min-w-72 rounded-xl bg-white/40 p-6 shadow-sm">
      <span className="loading loading-dots loading-lg text-gray-400" />
      <span className="text-gray-700">{message}</span>
    </CenterWrapper>
  );
};
