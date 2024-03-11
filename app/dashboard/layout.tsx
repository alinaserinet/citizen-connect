import { Navbar, SideNav } from '@libs/design';

const layout = () => {
  return (
    <div className="">
      <SideNav />
      <main className="mr-0 p-4 lg:mr-64">
        <Navbar />
      </main>
    </div>
  );
};
export default layout;
