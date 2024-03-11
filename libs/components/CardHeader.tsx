import type { ReactNode } from 'react';

interface CardHeaderProps {
  children: ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <div className="border-b border-gray-100 p-4 pb-3 text-center font-semibold">
      {children}
    </div>
  );
};
export default CardHeader;
