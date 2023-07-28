import { create } from 'zustand';

interface FilterState {
  ratings: number[];
  brands: string[];
  addBrand: (brand: string) => void;
  removeBrand: (brand: string) => void;
  addRating: (rating: number) => void;
  removeRating: (rating: number) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  brands: [],
  ratings: [],

  addBrand: (brand) =>
    set((state) => ({ ...state, brands: [...state.brands, brand] })),

  removeBrand: (brand) =>
    set((state) => ({
      ...state,
      brands: state.brands.filter((b) => b !== brand),
    })),

  addRating: (rating) =>
    set((state) => ({ ...state, ratings: [...state.ratings, rating] })),

  removeRating: (rating) =>
    set((state) => ({
      ...state,
      ratings: state.ratings.filter((r) => r !== rating),
    })),
}));
