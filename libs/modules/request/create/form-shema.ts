import type { ZodType } from 'zod';
import { z } from 'zod';

import type { CreateRequestForm } from './form-type';

export const createFormSchema: ZodType<CreateRequestForm> = z.object({
  location: z.string({ required_error: 'منطقه ضروری است' }),
  department: z.string({ required_error: 'بخش ضروری است' }),
  category: z.string({ required_error: 'دسته بندی ضروری است' }),
  title: z
    .string({ required_error: 'عنوان درخواست ضروری است' })
    .min(1, 'عنوان درخواست وارد نشده است')
    .min(5, 'عنوان درخواست کوتاه است'),
  description: z
    .string({ required_error: 'توضیحات ضروری است' })
    .min(1, 'توضیحات وارد نشده است')
    .min(20, 'توضیحات کوتاه است'),
  priority: z.string({ required_error: 'اولویت ضروری است' }),
});
