import { Button, CardBody, Input, Label } from '@libs/components';
import { twMerge } from 'tailwind-merge';

interface LoginBoxProps {
  className?: string;
}

const LoginBox = ({ className }: LoginBoxProps) => {
  return (
    <CardBody className={twMerge('flex flex-col gap-6', className)}>
      <div>
        <Label htmlFor="mobile">تلفن همراه</Label>
        <Input
          placeholder="09..."
          id="mobile"
          name="mobile"
          type="number"
          ltr
        />
      </div>
      <Button className="text-sm font-semibold">ورود</Button>
    </CardBody>
  );
};
export default LoginBox;
