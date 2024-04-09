import { Button, Card, CardBody, CardHeader } from '@libs/components';
import { CenterWrapper } from '@libs/design';
import Link from 'next/link';
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
    <CenterWrapper className={twMerge('', className)} mobile={false}>
      <Card className="h-56 w-96 max-w-full">
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
    </CenterWrapper>
  );
};
