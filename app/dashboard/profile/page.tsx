import { userServerService } from '@libs/services';

const Profile = async () => {
  const user = await userServerService.getProfile();
  console.log(user);

  return <div>{JSON.stringify(user)}</div>;
};
export default Profile;
