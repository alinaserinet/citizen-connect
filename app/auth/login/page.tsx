import { Container } from '@libs/components';
import { LoginBox } from '@libs/design';

const page = () => {
  return (
    <Container className="py-6">
      <LoginBox className="mx-auto max-w-sm" />
    </Container>
  );
};
export default page;
