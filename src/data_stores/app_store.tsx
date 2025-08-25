import { create } from "zustand";

type AppState = {
  isMobile: boolean;
  setIsMobile: (bool: boolean) => void;
};

const useAppStore = create<AppState>((set) => ({
  isMobile: false,
  setIsMobile: (bool) => set(() => ({ isMobile: bool })),
}));

export default useAppStore;
