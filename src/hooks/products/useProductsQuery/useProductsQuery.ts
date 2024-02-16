import { ProductApi } from "@api/products/ProductsApi";
import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "@store/useProductStore";

export const useProductsQuery = () => {
  const { setProducts, pagination, filters, sort } = useProductStore(
    (state) => state
  );

  return useQuery({
    initialData: [],
    queryKey: ["products", pagination.currentPage, filters],
    queryFn: async ({ signal }) => {
      try {
        if (pagination && filters) {
          const params = {
            page: pagination.currentPage,
            query: filters.query,
            rating: filters.rating,
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
            category: filters.category,
          };
          const products = await ProductApi.getProducts({
            signal,
            params,
            sort,
          });
          window.scrollTo({ behavior: "smooth", top: 0 });
          setProducts(products);
          return products;
        }
        return [];
      } catch (e) {
        throw e;
      }
    },
  });
};
