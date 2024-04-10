import { authConfig } from '@config';
import { Navbar, PageTitle, UserTray } from '@libs/design';
import { getServerSession } from 'next-auth';

import { SidebarButton } from './sidebar-button';

const MainNavbar = async () => {
  const session = await getServerSession(authConfig);
  const userTitle = session?.user.name ?? 'کاربر وب‌ سایت';

  return (
    <Navbar className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <SidebarButton />
        <PageTitle />
      </div>
      {session ? <UserTray userTitle={userTitle} /> : null}
    </Navbar>
  );
};
export default MainNavbar;
