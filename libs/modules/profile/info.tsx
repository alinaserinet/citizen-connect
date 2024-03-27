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
      <InfoItem title="تلفن همراه" value={user.mobile} />
      <InfoItem title="ایمیل" value={user.email} />
      <InfoItem
        title="سطح دسترسی"
        value={user.isEmployee ? 'مسئول' : 'کاربر'}
      />
    </InfoBox>
  );
};
