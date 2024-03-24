'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormFieldError, Input, Label } from '@libs/components';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { OtpFormSchema } from './FormsSchema';
import { otpFormSchema } from './FormsSchema';

interface InsertOtpFormProps {
  mobile: string | null;
  expireUnix: number | null;
}

const InsertOtpForm = ({ mobile }: InsertOtpFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormSchema>({
    resolver: zodResolver(otpFormSchema),
  });

  const handleEntry: SubmitHandler<OtpFormSchema> = async data => {
    if (!mobile) return;
    setIsLoading(true);
    const result = await signIn('credentials', {
      mobile,
      otp: data.code,
      redirect: false,
      callbackUrl: '/',
    }).finally(() => setIsLoading(false));

    if (result?.ok) {
      return router.replace('/');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleEntry)}>
      <div className="flex flex-col gap-6">
        <div>
          <Label htmlFor="code">کد تایید</Label>
          <Input id="code" ltr {...register('code')} type="number" />
          <FormFieldError message={errors.code?.message} />
        </div>
        <Button
          className="text-sm font-semibold"
          type="submit"
          disabled={isLoading}
        >
          ورود به حساب
        </Button>
      </div>
    </form>
  );
};
export default InsertOtpForm;
