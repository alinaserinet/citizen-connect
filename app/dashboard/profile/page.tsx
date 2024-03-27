import { Card, CardBody, CardHeader } from '@libs/components';
import { ProfileInfo } from '@libs/modules';
import { userServerService } from '@libs/services';
import Link from 'next/link';

const Profile = async () => {
  const user = await userServerService.getProfile();

  if (!user) {
    return <div>کاربر یافت نشد</div>;
  }

  return (
    <Card>
      <CardHeader className="relative text-start">
        <h1>اطلاعات کاربری</h1>
        <Link
          href="/dashboard/profile/edit"
          className="absolute left-4 top-4 text-blue-800"
        >
          ویرایش اطلاعات
        </Link>
      </CardHeader>
      <CardBody className="p-6">
        <ProfileInfo user={user} />
      </CardBody>
    </Card>
  );
};
export default Profile;
