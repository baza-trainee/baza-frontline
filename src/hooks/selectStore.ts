import { useState } from 'react';

export const useSelect = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const setSelect = (condition: boolean) => {
    setIsSelectOpen(condition);
  };

  return {
    isSelectOpen,
    setSelect,
  };
};
