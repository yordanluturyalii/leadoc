import { create } from 'zustand';

type SelectStore = {
  value: string;
  isOpen: boolean;
  changeValue: (newValue: string) => void;
  toggleOpen: () => void;
};

export const useSelectStore = create<SelectStore>((set) =>({
  value: 'Select one option',
  isOpen: false,
  changeValue: (newValue: string) => {
    set({
      value: newValue,
    });
  },
  toggleOpen: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }))
  }
}))