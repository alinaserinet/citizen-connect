import type { AppError } from '@types';

import DomainErrorCodes from './codes';

const domainErrors: Record<DomainErrorCodes, AppError> = {
  [DomainErrorCodes.DuplicateOtpRequest]: {
    type: 'domain',
    message: 'درخواست تکراری است، لطفا صبر کنید',
  },
  [DomainErrorCodes.InvalidOtpCode]: {
    type: 'domain',
    message: 'کد احراز هویت اشتباه است',
  },
  [DomainErrorCodes.UserNotFound]: {
    type: 'domain',
    message: 'کاربر یافت نشد',
  },
  [DomainErrorCodes.CategoryIsEmpty]: {
    type: 'domain',
    message: 'دسته بندی انتخاب نشده است',
  },
  [DomainErrorCodes.DepartmentIsEmpty]: {
    type: 'domain',
    message: 'بخش انتخاب نشده است',
  },
  [DomainErrorCodes.DescriptionIsEmpty]: {
    type: 'domain',
    message: 'توضیحات وارد نشده است',
  },
  [DomainErrorCodes.IDIsNotNumberString]: {
    type: 'domain',
    message: 'شناسه باید به صورت عدد باشد',
  },
  [DomainErrorCodes.InvalidMobile]: {
    type: 'domain',
    message: 'فرمت تلفن همراه نامعتبر است',
  },
  [DomainErrorCodes.LocationIsEmpty]: {
    type: 'domain',
    message: 'موقعیت مکانی انتخاب نشده است',
  },
  [DomainErrorCodes.MobileIsEmpty]: {
    type: 'domain',
    message: 'تلفن همراه وارد نشده است',
  },
  [DomainErrorCodes.OtpIsEmpty]: {
    type: 'domain',
    message: 'کد احراز هویت وارد نشده است',
  },
  [DomainErrorCodes.RequestIllegalAccess]: {
    type: 'domain',
    message: 'دسترسی لازم برای مشاهده درخواست را ندارید',
  },
  [DomainErrorCodes.RequestNotFound]: {
    type: 'domain',
    message: 'درخواست یافت نشد',
  },
  [DomainErrorCodes.TitleIsEmpty]: {
    type: 'domain',
    message: 'عنوان وارد نشده است',
  },
  [DomainErrorCodes.SendSMSFailed]: {
    type: 'domain',
    message: 'مشکلی در ارسال پیامک رخ داد',
  },
};

export default domainErrors;
