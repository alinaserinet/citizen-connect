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
};

export default httpErrors;
