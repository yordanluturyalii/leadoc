import { create } from 'zustand';

type ModalState = {
  pricingOpen: boolean;
  profileOpen: boolean;
  setPricingOpen: (open: boolean) => void;
  setProfileOpen: (open: boolean) => void;
};

export const useStoreModal = create<ModalState>()((set) => ({
  pricingOpen: false,
  profileOpen: false,
  setPricingOpen: (open) => set({ pricingOpen: open }),
  setProfileOpen: (open) => set({ profileOpen: open }),
}));
