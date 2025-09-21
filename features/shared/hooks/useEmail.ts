import { create } from "zustand";
import { persist } from "zustand/middleware";

type emailState = {
  email: string;
  setEmail: (data: string) => void;
};

export const useEmail = create<emailState>()(
  persist(
    (set) => ({
      email: "",
      setEmail: (em: string) => set({ email: em }),
    }),
    { name: "email-storage" }
  )
);
