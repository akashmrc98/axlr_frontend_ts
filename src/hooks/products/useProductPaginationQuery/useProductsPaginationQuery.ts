import { DefinedUseQueryResult, useQuery } from "@tanstack/react-query";
import { ProductApi } from "@api/products/ProductsApi";

import { useProductStore } from "@store/useProductStore";

export const useProductsPaginationQuery = (): DefinedUseQueryResult<
  {},
  Error
> => {
  const { pagination, filters, setPagination } = useProductStore(
    (state) => state
  );
  return useQuery({
    initialData: { ...pagination },
    queryKey: ["pagination", filters],
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
          const p = await ProductApi.getPagination({
            params,
            signal,
          });
          setPagination({ ...p });
          return { ...p };
        }
        return {};
      } catch (e) {
        throw e;
      }
    },
  });
};
