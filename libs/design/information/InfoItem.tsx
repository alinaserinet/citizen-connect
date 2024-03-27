import { twMerge } from 'tailwind-merge';

interface InfoBoxProps {
  title: string;
  value: number | string | null;
}

const InfoItem = ({ title, value }: InfoBoxProps) => {
  return (
    <li className="flex items-center overflow-hidden rounded-xl bg-gray-100 font-semibold">
      <span className="w-36 bg-gray-600 px-4 py-3 text-white">{title}</span>
      <span className={twMerge('px-4', value ? '' : 'text-gray-400/85')}>
        {value ?? 'وارد نشده'}
      </span>
    </li>
  );
};
export default InfoItem;
