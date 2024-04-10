'use client';

import { Button } from '@libs/components';
import { useSetSidebar } from '@libs/providers';
import { List } from '@phosphor-icons/react';

export const SidebarButton = () => {
  const setSidebar = useSetSidebar();

  const handleOpenSidebar = () => {
    setSidebar(state => ({ ...state, isOpen: true }));
  };

  return (
    <Button genre="link" onClick={handleOpenSidebar} className="lg:hidden">
      <List size={26} />
    </Button>
  );
};
