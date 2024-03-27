import { Card, CardBody, CardHeader } from '@libs/components';
import { ProfileInfo } from '@libs/modules';
import { userServerService } from '@libs/services';

const Profile = async () => {
  const user = await userServerService.getProfile();

  if (!user) {
    return <div>کاربر یافت نشد</div>;
  }

  return (
    <Card>
      <CardHeader className="text-start">اطلاعات کاربری</CardHeader>
      <CardBody className="p-6">
        <ProfileInfo user={user} />
      </CardBody>
    </Card>
  );
};
export default Profile;
