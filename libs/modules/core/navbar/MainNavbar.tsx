import { authConfig } from '@config';
import { Navbar, PageTitle, UserTray } from '@libs/design';
import { jwtDecode } from 'jwt-decode';
import { getServerSession } from 'next-auth';

import { SidebarButton } from './sidebar-button';

interface MainNavbarProps {
  showSidebarBtn?: boolean;
}

const MainNavbar = async ({ showSidebarBtn = true }: MainNavbarProps) => {
  const session = await getServerSession(authConfig);
  const { isEmployee } = (() => {
    if (session?.user.accessToken) {
      return jwtDecode<{ isEmployee: boolean }>(session.user.accessToken);
    }

    return { isEmployee: false };
  })();
  const userTitle =
    session?.user.name ?? isEmployee ? 'مسئول وب سایت' : 'کاربر وب‌ سایت';

  return (
    <Navbar className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {showSidebarBtn ? <SidebarButton /> : null}
        <PageTitle
          className="font-semibold"
          title="سامانه ارتباط مردم با مهندس انارکی"
        />
      </div>
      {session ? <UserTray userTitle={userTitle} /> : null}
    </Navbar>
  );
};
export default MainNavbar;
