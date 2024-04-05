'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormFieldError, Input, Label } from '@libs/components';
import { useSetAlert } from '@libs/providers';
import { authService } from '@libs/services';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { MobileFormSchema } from './FormsSchema';
import { mobileFormSchema } from './FormsSchema';

interface InsertMobileFormProps {
  setMobile: Dispatch<SetStateAction<string | null>>;
  setOtpExpireUnix: Dispatch<SetStateAction<number | null>>;
}

const InsertMobileForm = ({
  setMobile,
  setOtpExpireUnix,
}: InsertMobileFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const setAlert = useSetAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MobileFormSchema>({
    resolver: zodResolver(mobileFormSchema),
  });

  const handleLogin: SubmitHandler<MobileFormSchema> = async data => {
    try {
      setAlert(null);
      setIsLoading(true);
      const result = await authService.client
        .getOtp(data.mobile)
        .finally(() => setIsLoading(false));
      setAlert({
        message: 'عملیات موفق',
        color: 'success',
        hint: 'کد تایید ارسال شد',
      });
      setMobile(result.mobile);
      setOtpExpireUnix(result.expire_unix);
    } catch (error) {
      if (typeof error === 'string') {
        setAlert({
          message: 'عملیات ناموفق',
          color: 'error',
          hint: error,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col gap-6">
        <span className="text-xs text-gray-500">
          برای ورود یا ثبت نام لطفا شماره تلفن خود را وارد کنید
        </span>
        <div>
          <Label htmlFor="mobile">تلفن همراه</Label>
          <Input
            placeholder="09..."
            id="mobile"
            type="number"
            ltr
            {...register('mobile')}
          />
          <FormFieldError message={errors.mobile?.message} />
        </div>
        <Button color="success" type="submit" disabled={isLoading}>
          ارسال کد تایید
        </Button>
      </div>
    </form>
  );
};
export default InsertMobileForm;
