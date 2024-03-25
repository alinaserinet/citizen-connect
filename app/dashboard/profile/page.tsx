'use client';
import { userService } from '@libs/services';
import { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    const user = userService.getProfile().then(console.log);
  });

  return <div>profile</div>;
};
export default Profile;
