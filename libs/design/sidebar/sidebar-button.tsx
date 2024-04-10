'use client';
import { Button } from '@libs/components';
import { useSetSidebar } from '@libs/providers';
import { X } from '@phosphor-icons/react';

export const SidebarButton = () => {
  const setSidebar = useSetSidebar();

  const handleCloseSidebar = () => {
    setSidebar(state => ({ ...state, isOpen: false }));
  };

  return (
    <Button
      genre="link"
      onClick={handleCloseSidebar}
      className="absolute left-4 top-4 lg:hidden"
    >
      <X size={26} />
    </Button>
  );
};
