import { create } from 'zustand'

interface valueState {
  isValue: boolean;
  makeChange: () => void;
}

export const useMenuProductsStore = create<valueState>((set) => ({
  isValue: false,
  makeChange: () => set((state) => 
    !state.isValue 
      ? { isValue: true } 
      : { isValue: false }
  ),
}));

export const useHamMenuStore = create<valueState>((set) => ({
  isValue: false,
  makeChange: () => set((state) => 
    !state.isValue 
      ? { isValue: false } 
      : { isValue: true }
  ),
}));


