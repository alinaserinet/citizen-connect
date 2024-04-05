'use client';
import { CardBody } from '@libs/components';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import InsertMobileForm from './InsertMobileForm';
import InsertOtpForm from './InsertOtpForm';

interface LoginBoxProps {
  className?: string;
}

const LoginBox = ({ className }: LoginBoxProps) => {
  const [mobile, setMobile] = useState<string | null>(null);
  const [otpExpireUnix, setOtpExpireUnix] = useState<number | null>(null);
  console.log(mobile, otpExpireUnix);

  const isMobileSet = !(mobile && otpExpireUnix);

  return (
    <CardBody className={twMerge(className)}>
      {isMobileSet ? (
        <InsertMobileForm
          setMobile={setMobile}
          setOtpExpireUnix={setOtpExpireUnix}
        />
      ) : (
        <InsertOtpForm
          mobile={mobile}
          expireUnix={otpExpireUnix}
          setMobile={setMobile}
          setOtpExpireUnix={setOtpExpireUnix}
        />
      )}
    </CardBody>
  );
};
export default LoginBox;
