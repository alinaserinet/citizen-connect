import { Card, CardHeader, Container } from '@libs/components';
import { LoginBox } from '@libs/modules';

const page = () => {
  return (
    <Container className="max-w-sm py-8">
      <Card>
        <CardHeader>ورود به حساب</CardHeader>
        <LoginBox className="gap-10 p-8" />
      </Card>
    </Container>
  );
};
export default page;
