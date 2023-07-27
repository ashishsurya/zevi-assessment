import { create } from 'zustand';

interface TrendsDialogState {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  setDialog: (open: boolean) => void;
}

export const useTrendsDialogStore = create<TrendsDialogState>((set) => ({
  open: false,
  closeDialog: () => set({ open: false }),
  openDialog: () => set({ open: true }),
  setDialog: (open) => set({ open }),
}));
