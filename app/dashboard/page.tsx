import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <Link
        href="/dashboard/profile"
        className="rounded-xl bg-blue-300 p-4 text-center font-semibold"
      >
        اطلاعات کاربری
      </Link>
      <Link
        href="/dashboard/requests"
        className="rounded-xl bg-blue-300 p-4 text-center font-semibold"
      >
        درخواست مشکلات
      </Link>
    </div>
  );
};
export default Dashboard;
