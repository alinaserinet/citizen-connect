import { twMerge } from 'tailwind-merge';

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <div className={twMerge('border-t border-gray-100', className)} />;
};
export default Divider;
