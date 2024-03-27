import { authConfig } from '@config';
import { Navbar, PageTitle, UserTray } from '@libs/design';
import { getServerSession } from 'next-auth';

const MainNavbar = async () => {
  const session = await getServerSession(authConfig);
  console.log(session);

  return (
    <Navbar>
      <PageTitle />
      {session ? <UserTray userTitle="علی ناصری" /> : null}
    </Navbar>
  );
};
export default MainNavbar;
