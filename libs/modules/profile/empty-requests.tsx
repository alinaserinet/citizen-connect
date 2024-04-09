import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
} from '@libs/components';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface EmptyRequestsProps {
  className?: string;
  showCreate?: boolean;
  message?: string;
}

export const EmptyRequests = ({
  className,
  showCreate = false,
  message = 'درخواستی یافت نشد',
}: EmptyRequestsProps) => {
  return (
    <Container className={twMerge('mt-8 max-w-96', className)}>
      <Card className="h-56">
        <CardHeader className="h-12">{message}</CardHeader>
        {showCreate ? (
          <CardBody className="flex h-[calc(100%-48px)] flex-col items-center justify-center gap-4">
            <small>درصورت نیاز می‌توانید درخواست خود را ثبت کنید</small>
            <Link href="/dashboard/requests/create">
              <Button color="success">ثبت درخواست جدید</Button>
            </Link>
          </CardBody>
        ) : null}
      </Card>
    </Container>
  );
};
