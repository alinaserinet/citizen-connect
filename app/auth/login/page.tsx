import { Alert, Card, CardHeader, Container } from '@libs/components';
import { LoginBox } from '@libs/modules';

const page = () => {
  return (
    <Container className="max-w-sm py-8">
      <Alert
        message="ورود ناموفق"
        hint="شماره تلفن را کنترل کنید"
        className="mb-5"
      />
      <Card>
        <CardHeader>ورود به حساب</CardHeader>
        <LoginBox className="gap-10 p-8" />
      </Card>
    </Container>
  );
};
export default page;
