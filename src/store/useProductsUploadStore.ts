import { create } from "zustand";
import { TPagination, TProduct } from "@interfaces/products/ProductTypes";

interface IProductUploadStore {
  products: TProduct[];
  pagination: TPagination;
  setProducts: (products: TProduct[]) => void;
  setPagination: (pagination: TPagination) => void;
}

export const useProductUploadStore = create<IProductUploadStore>((set) => ({
  products: [],
  pagination: {
    pages: [],
    currentPage: 1,
    totalPages: 1,
    totalProducts: null,
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
}));
