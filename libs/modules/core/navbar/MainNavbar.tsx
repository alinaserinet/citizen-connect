import { authConfig } from '@config';
import { Navbar, PageTitle, UserTray } from '@libs/design';
import { getServerSession } from 'next-auth';

const MainNavbar = async () => {
  const session = await getServerSession(authConfig);
  const userTitle = session?.user.name ?? 'کاربر وب‌ سایت';

  return (
    <Navbar>
      <PageTitle />
      {session ? <UserTray userTitle={userTitle} /> : null}
    </Navbar>
  );
};
export default MainNavbar;
