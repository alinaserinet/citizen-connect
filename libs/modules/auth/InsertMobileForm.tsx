'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormFieldError, Input, Label } from '@libs/components';
import { authClientService } from '@libs/services';
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MobileFormSchema>({
    resolver: zodResolver(mobileFormSchema),
  });

  const handleLogin: SubmitHandler<MobileFormSchema> = async data => {
    setIsLoading(true);
    const result = await authClientService
      .getOtp(data.mobile)
      .finally(() => setIsLoading(false));
    setMobile(result.mobile);
    setOtpExpireUnix(result.expire_unix);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col gap-6">
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
        <Button
          className="text-sm font-semibold"
          type="submit"
          disabled={isLoading}
        >
          ارسال کد تایید
        </Button>
      </div>
    </form>
  );
};
export default InsertMobileForm;
