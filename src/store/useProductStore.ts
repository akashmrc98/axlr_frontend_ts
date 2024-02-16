import { create } from "zustand";
import {
  TFilters,
  TPagination,
  TProduct,
  TSorts,
} from "@interfaces/products/ProductTypes";

export interface TProductStoreState {
  products: TProduct[];
  pagination: TPagination;
  filters: TFilters;
  sort: TSorts;
  setProducts: (products: TProduct[]) => void;
  setPagination: (pagination: TPagination) => void;
  setFilters: (filters: TFilters) => void;
}

export const useProductStore = create<TProductStoreState>((set) => ({
  products: [],
  pagination: {
    pages: [],
    currentPage: 1,
    totalPages: 1,
    totalProducts: null,
  },
  filters: {
    query: null,
    rating: null,
    minPrice: null,
    maxPrice: null,
    category: null,
  },
  sort: {
    price: null,
    rating: null,
  },
  setProducts: (products: TProduct[]) => {
    set(() => ({
      products: [...products],
    }));
  },
  setPagination: (pagination: TPagination) => {
    set(() => ({
      pagination: { ...pagination },
    }));
  },
  setFilters: (filters: TFilters) => set({ filters: { ...filters } }),
}));
