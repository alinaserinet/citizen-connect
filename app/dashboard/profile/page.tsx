import { userServerService } from '@libs/services';

const Profile = async () => {
  const user = await userServerService.getProfile();
  console.log(user);

  return (
    <div>
      <div>صفحه کاربر</div>
    </div>
  );
};
export default Profile;
