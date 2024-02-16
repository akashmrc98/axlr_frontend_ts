export type TProduct = {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
};

export type TPagination = {
  pages: number[];
  currentPage: number | 1;
  totalPages: number | 1;
  totalProducts: number | null;
};

export type TFilters = {
  query: string | null;
  rating: number | null;
  minPrice: number | null;
  maxPrice: number | null;
  category: string | null;
};

export type TSort = "asc" | "desc" | null;

export type TSorts = {
  price: TSort;
  rating: TSort;
};
