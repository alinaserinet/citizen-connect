import { Button, Card, CardBody, CardHeader, Input } from '@libs/components';
import { twMerge } from 'tailwind-merge';

interface LoginBoxProps {
  className?: string;
}

const LoginBox = ({ className }: LoginBoxProps) => {
  return (
    <Card className={twMerge(className)}>
      <CardHeader>ورود به حساب</CardHeader>
      <CardBody className="flex flex-col gap-6 p-6">
        <Input placeholder="09..." ltr />
        <Input placeholder="password" ltr type="password" />
        <Button className="text-sm font-semibold">ورود</Button>
      </CardBody>
    </Card>
  );
};
export default LoginBox;
