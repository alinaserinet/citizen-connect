import type { Icon } from '@phosphor-icons/react';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr/CheckCircle';
import { WarningCircle } from '@phosphor-icons/react/dist/ssr/WarningCircle';
import { twMerge } from 'tailwind-merge';

interface InfoBoxProps {
  title: string;
  value: number | string | null;
  verified?: boolean;
}

const icons: Record<'unVerified' | 'verified', Icon> = {
  verified: CheckCircle,
  unVerified: WarningCircle,
};

const InfoItem = ({ title, value, verified }: InfoBoxProps) => {
  const StatusIcon = verified ? icons.verified : icons.unVerified;
  return (
    <li className="relative flex items-center overflow-hidden rounded-xl bg-gray-100 font-semibold">
      <span className="w-36 bg-gray-600 px-4 py-3 text-white">{title}</span>
      <span className={twMerge('px-4', value ? '' : 'text-gray-400/85')}>
        {value ?? 'وارد نشده'}
      </span>
      {value && verified !== undefined ? (
        <StatusIcon
          className={twMerge(
            'absolute left-3 top-1/2 -translate-y-1/2',
            verified ? 'text-green-600' : 'text-red-600',
          )}
          size={26}
        />
      ) : null}
    </li>
  );
};
export default InfoItem;
