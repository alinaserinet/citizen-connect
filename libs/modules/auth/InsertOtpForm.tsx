'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormFieldError, Input, Label } from '@libs/components';
import { useSetAlert } from '@libs/providers';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { OtpFormSchema } from './FormsSchema';
import { otpFormSchema } from './FormsSchema';

interface InsertOtpFormProps {
  mobile: string;
  expireUnix: number;
  setMobile: Dispatch<SetStateAction<string | null>>;
  setOtpExpireUnix: Dispatch<SetStateAction<number | null>>;
}

const InsertOtpForm = ({
  mobile,
  expireUnix,
  setMobile,
  setOtpExpireUnix,
}: InsertOtpFormProps) => {
  const setAlert = useSetAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [expireDuration, setExpireDuration] = useState<number>(
    Math.floor((expireUnix - Date.now()) / 1000),
  );

  const handleGoBack = () => {
    setMobile(null);
    setOtpExpireUnix(null);
    setAlert(null);
  };

  useEffect(() => {
    if (!expireUnix) return;
    const expireInterval = setInterval(() => {
      const nowUnix = Date.now();
      const duration = Math.floor((expireUnix - nowUnix) / 1000);

      if (duration <= 0) {
        clearInterval(expireInterval);
        handleGoBack();
        return;
      }

      setExpireDuration(duration);
    }, 1000);
    return () => clearInterval(expireInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expireUnix]);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<OtpFormSchema>({
    resolver: zodResolver(otpFormSchema),
  });

  useEffect(() => {
    setFocus('code');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobile, expireUnix]);

  const handleEntry: SubmitHandler<OtpFormSchema> = async data => {
    if (!mobile) return;
    setAlert(null);
    setIsLoading(true);
    const result = await signIn('credentials', {
      mobile: `0${mobile}`,
      otp: data.code,
      redirect: false,
      callbackUrl: '/dashboard/profile',
    }).finally(() => setIsLoading(false));

    if (result?.error) {
      setAlert({
        message: 'عملیات ناموفق',
        color: 'error',
        hint: result.error,
      });
      return;
    }

    if (result?.ok) {
      router.replace('/dashboard/profile');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleEntry)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-500">شماره تلفن همراه: </span>
              <span>0{mobile}</span>
            </div>
            <button
              className="mr-3 text-xs text-blue-600"
              type="button"
              onClick={handleGoBack}
            >
              ویرایش شماره
            </button>
          </div>
          {expireDuration ? (
            <div>
              <span className="text-xs text-gray-500">
                مدت زمان اعتبار کد:‌
              </span>
              <span className="mr-2 font-bold text-green-700">
                {expireDuration} ثانیه
              </span>
            </div>
          ) : null}
        </div>
        <div>
          <Label htmlFor="code">کد تایید</Label>
          <Input id="code" ltr {...register('code')} type="number" />
          <FormFieldError message={errors.code?.message} />
        </div>
        <Button color="success" type="submit" loading={isLoading}>
          ورود به حساب
        </Button>
      </div>
    </form>
  );
};
export default InsertOtpForm;
