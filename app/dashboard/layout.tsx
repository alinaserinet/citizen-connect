import { Navbar, SideNav, UserTray } from '@libs/design';

const layout = () => {
  return (
    <div className="">
      <SideNav className="lg:start-3 lg:top-3" />
      <main className="mr-0 p-3 lg:mr-[15.75rem]">
        <Navbar className="flex justify-between">
          <div />
          <UserTray className="w-56" />
        </Navbar>
      </main>
    </div>
  );
};
export default layout;
