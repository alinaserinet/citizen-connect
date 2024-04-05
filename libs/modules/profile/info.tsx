import { InfoBox, InfoItem } from '@libs/design';
import type { User } from '@types';

interface ProfileInfoProps {
  user: User;
}

export const ProfileInfo = ({ user }: ProfileInfoProps) => {
  return (
    <InfoBox>
      <InfoItem title="نام" value={user.firstName} />
      <InfoItem title="نام خانوادگی" value={user.lastName} />
      <InfoItem title="کد ملی" value={user.nationalCode} />
      <InfoItem
        title="تلفن همراه"
        value={user.mobile}
        verified={user.isMobileVerified}
      />
      <InfoItem
        title="ایمیل"
        value={user.email}
        verified={user.isEmailVerified}
      />
      <InfoItem
        title="سطح دسترسی"
        value={user.isEmployee ? 'مسئول' : 'کاربر عادی'}
      />
    </InfoBox>
  );
};
