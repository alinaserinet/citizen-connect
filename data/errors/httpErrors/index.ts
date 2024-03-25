import { WifiSlash } from '@phosphor-icons/react/dist/ssr/WifiSlash';
import type { AppError } from '@types';

import type { HttpErrorKey } from './keys';

const httpErrors: Record<HttpErrorKey, AppError> = {
  ERR_NETWORK: {
    message: 'سرور در دسترس نیست',
    description: 'لطفا اتصال اینترنت را چک کنید و دوباره تلاش کنید',
    type: 'http',
    icon: WifiSlash,
    fixed: true,
    showRefreshBtn: true,
  },
  401: {
    message: 'دسترسی غیر مجاز',
    description: 'شما دسترسی لازم به وب سرویس را ندارید',
    type: 'http',
    icon: WifiSlash,
    fixed: false,
    showRefreshBtn: false,
  },
  404: {
    message: 'وب سرویس یافت نشد',
    description: 'وب سرویس مورد نظر وجود',
    type: 'http',
    icon: WifiSlash,
    fixed: false,
    showRefreshBtn: false,
  },
};

export default httpErrors;
