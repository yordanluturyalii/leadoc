import { create } from 'zustand';

type Modal = {
    isOpen: boolean;
    showModal: (isOpen: boolean) => void
}

export const useStoreModal = create<Modal>()((set) => ({
    isOpen: false,
    showModal: (isOpen) => set(() => ({isOpen})),
}))
