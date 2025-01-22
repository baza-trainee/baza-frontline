import { create } from 'zustand';

interface AlertState {
  isSelectOpen: boolean;
  setSelect: (condition: boolean) => void;
}

export const useSelect = create<AlertState>((set) => ({
  isSelectOpen: false,
  setSelect: (condition) => set({ isSelectOpen: condition }),
}));
