import { authConfig } from '@config';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

const Dashboard = async () => {
  const session = await getServerSession(authConfig);
  const { isEmployee } = jwtDecode<{ isEmployee: boolean }>(
    session?.user.accessToken ?? '',
  );
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <Link
        href="/dashboard/profile"
        className="rounded-xl bg-blue-300 p-4 text-center font-semibold"
      >
        اطلاعات کاربری
      </Link>
      {!isEmployee ? (
        <Link
          href="/dashboard/requests"
          className="rounded-xl bg-blue-300 p-4 text-center font-semibold"
        >
          درخواست مشکلات
        </Link>
      ) : (
        <Link
          href="/dashboard/requests"
          className="rounded-xl bg-blue-300 p-4 text-center font-semibold"
        >
          مشاهده درخواست‌ های کاربران
        </Link>
      )}
    </div>
  );
};
export default Dashboard;
