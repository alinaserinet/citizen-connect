import type { ReactNode } from 'react';

interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <div className="border-b border-gray-100 bg-gray-50 p-4 pb-3 text-center font-semibold">
      {children}
    </div>
  );
};
export default CardHeader;
