'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormFieldError, Input, Label } from '@libs/components';
import { userService } from '@libs/services';
import type { User } from '@types';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { EditFormSchema } from './formSchema';
import { editFormSchema } from './formSchema';

interface ProfileEditProps {
  user: User;
}

export const ProfileEditBox = ({ user }: ProfileEditProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormSchema>({
    resolver: zodResolver(editFormSchema),
    defaultValues: useMemo(
      () => ({
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        nationalCode: user.nationalCode ?? '',
      }),
      [user],
    ),
  });

  const handleEdit: SubmitHandler<EditFormSchema> = async data => {
    try {
      const res = await userService.client.updateProfile({
        firstName: data.firstName,
        lastName: data.lastName,
        nationalCode: data.nationalCode,
      });

      console.log(res);

      router.push('/dashboard/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleEdit)}>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Label htmlFor="first-name">نام</Label>
            <Input {...register('firstName')} id="first-name" />
            <FormFieldError message={errors.firstName?.message} />
          </div>
          <div>
            <Label htmlFor="last-name">نام خانوادگی</Label>
            <Input {...register('lastName')} id="last-name" />
            <FormFieldError message={errors.lastName?.message} />
          </div>
          <div>
            <Label htmlFor="national-code">شماره ملی</Label>
            <Input
              {...register('nationalCode')}
              id="national-code"
              type="number"
              ltr
            />
            <FormFieldError message={errors.nationalCode?.message} />
          </div>
        </div>
        <div>
          <Button color="success" type="submit">
            ذخیره اطلاعات
          </Button>
        </div>
      </div>
    </form>
  );
};
