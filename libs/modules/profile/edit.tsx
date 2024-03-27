import { Button, Input, Label } from '@libs/components';
import type { User } from '@types';

interface ProfileEditProps {
  user: User;
}

export const ProfileEditBox = ({ user }: ProfileEditProps) => {
  return (
    <form>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          <div>
            <Label htmlFor="first-name">نام</Label>
            <Input id="first-name" value={user.firstName ?? ''} />
          </div>
          <div>
            <Label htmlFor="last-name">نام خانوادگی</Label>
            <Input id="last-name" value={user.lastName ?? ''} />
          </div>
          <div>
            <Label htmlFor="national-code">شماره ملی</Label>
            <Input
              id="national-code"
              type="number"
              ltr
              value={user.nationalCode ?? ''}
            />
          </div>
        </div>
        <div>
          <Button color="success">ذخیره اطلاعات</Button>
        </div>
      </div>
    </form>
  );
};
