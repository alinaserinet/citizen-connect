'use client';
import { Alert } from '@libs/components';
import { useAlert } from '@libs/providers';
import { twMerge } from 'tailwind-merge';

interface ErrorBoxProps {
  className?: string;
}

export const AlertBox = ({ className }: ErrorBoxProps) => {
  const alert = useAlert();

  if (!alert) return null;

  return (
    <div className={twMerge('mb-4', className)}>
      <Alert message={alert.message} hint={alert.hint} color={alert.color} />
    </div>
  );
};
