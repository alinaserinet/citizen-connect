import type { AppMessage } from '@types';

import { DomainMessageCodes } from './codes';

export type { DomainMessageCodes };

export const domainMessages: Record<DomainMessageCodes, AppMessage> = {
  [DomainMessageCodes.OtpCodeSent]: {
    message: 'کد تایید یک بار مصرف ارسال شد',
  },
  [DomainMessageCodes.PairTokensCreated]: {
    message: 'جفت توکن ها ساخته شدند',
  },
  [DomainMessageCodes.PairTokensChanged]: {
    message: 'جفت توکن ها ساخته شدند',
  },
  [DomainMessageCodes.RefreshTokenGenerated]: {
    message: 'رفرش توکن ساخته شد',
  },
  [DomainMessageCodes.ProfileUpdated]: {
    message: 'اطلاعات کاربری به روز شد',
  },
  [DomainMessageCodes.UserFound]: {
    message: 'کاربر یافت شد',
  },
  [DomainMessageCodes.UserUpdated]: {
    message: 'کاربر به روز شد',
  },
};
