import { Card, CardBody, Container } from '@libs/components';
import { MainWrapper } from '@libs/design';
import { MainNavbar } from '@libs/modules';
import Link from 'next/link';

const page = () => {
  return (
    <MainWrapper className="relative min-h-screen lg:mr-0 lg:pr-3">
      <MainNavbar showSidebarBtn={false} />
      <Container>
        <Card className="mt-4">
          <CardBody>
            <Link href="/dashboard">هدایت به صفحه داشبورد</Link>
          </CardBody>
        </Card>
      </Container>
    </MainWrapper>
  );
};
export default page;
