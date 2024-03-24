import type { ZodType } from 'zod';
import { z } from 'zod';

import type { MobileForm, OtpForm } from './FormsType';

export const mobileFormSchema: ZodType<MobileForm> = z.object({
  mobile: z.string().length(11, { message: 'شماره موبایل باید ۱۱ رقم باشد' }),
});

export type MobileFormSchema = z.infer<typeof mobileFormSchema>;

export const otpFormSchema: ZodType<OtpForm> = z.object({
  code: z.string(),
});

export type OtpFormSchema = z.infer<typeof otpFormSchema>;
