import { Card, CardBody, CardHeader } from '@libs/components';
import { ProfileEditBox } from '@libs/modules';
import { userService } from '@libs/services';

const EditProfile = async () => {
  const user = await userService.server.getProfile();

  if (!user) {
    return <div>کاربر یافت نشد</div>;
  }

  return (
    <Card>
      <CardHeader className="relative text-start">
        <h1>ویرایش اطلاعات کاربری</h1>
      </CardHeader>
      <CardBody className="p-6">
        <ProfileEditBox user={user} />
      </CardBody>
    </Card>
  );
};
export default EditProfile;
