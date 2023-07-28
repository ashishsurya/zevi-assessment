import { create } from 'zustand';
import { Product } from '../utils/types';
import { getSearchResults } from '../utils/getSearchResults';

interface ProductsState {
  products: Product[];

  setProducts: (newProducts: Product[]) => void;
}

export const useProducts = create<ProductsState>((set) => ({
  products: getSearchResults(),
  setProducts: (newProducts) =>
    set((state) => ({ ...state, products: newProducts })),
}));
