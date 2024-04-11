import { Status } from '@types';

export const statuses: Record<Status, string> = {
  [Status.NotChecked]: 'بررسی نشده',
  [Status.Pending]: 'در حال بررسی',
  [Status.Referred]: 'ارجاع داده شده',
  [Status.Completed]: 'تکمیل شده',
};
