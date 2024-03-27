import type { ZodType } from 'zod';
import { z } from 'zod';

import type { EditForm } from './formType';

export const editFormSchema: ZodType<EditForm> = z.object({
  firstName: z.string(),
  lastName: z.string(),
  nationalCode: z.string(),
});

export type EditFormSchema = z.infer<typeof editFormSchema>;
