import { Card, CardBody, Container } from '@libs/components';
import Link from 'next/link';

const page = () => {
  return (
    <Container>
      <Card className="mt-4">
        <CardBody>
          <Link href="/dashboard">هدایت به صفحه داشبورد</Link>
        </CardBody>
      </Card>
    </Container>
  );
};
export default page;
