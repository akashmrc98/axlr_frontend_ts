import { Box, Divider, Flex, Grid } from "@chakra-ui/react";

import Navbar from "@components/common/Navbar";

import ProductsLoader from "@components/products/ProductsLoader/ProductsLoader";
import ProductsSearchForm from "components/products/ProductsSearchForm/ProductsSearchForm";
import ProductsPagination from "@components/products/ProductsPagination/ProductsPagination";
import ProductsFiltersForm from "@components/products/ProductsFilterForm/ProductsFilterForm";
import ProductCountComponent from "@components/products/ProductCountComponent/ProductCountComponent";
import ProductsListComponent from "@components/products/ProductsListComponent/ProductsListComponent";
import ProductsSortingComponent from "@components/products/ProductsSortingComponent/ProductsSortingComponent";
import ProductsCategoryComponent from "@components/products/ProductsCategoryComponent/ProductsCategoryComponent";

import { useProductsQuery } from "@hooks/products/useProductsQuery/useProductsQuery";
import { useProductsPaginationQuery } from "@hooks/products/useProductPaginationQuery/useProductsPaginationQuery";

export default function Products() {
  const products = useProductsQuery();
  const pagination = useProductsPaginationQuery();
  console.log(products.isLoading, products.isFetching);

  return (
    <Box>
      <Navbar />
      <Grid
        gridTemplateColumns={{ base: "1fr ", lg: "2fr 9fr" }}
        px={4}
        py={4}
        h="100%"
      >
        {products.status === "success" && (
          <Box>
            <ProductsFiltersForm />
            <ProductsCategoryComponent />
          </Box>
        )}
        <Box>
          <Flex
            w="80%"
            mx="auto"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {products.isFetched && <ProductCountComponent />}
            {products.isFetched && (
              <Box py={4}>
                <ProductsSearchForm />
                <ProductsSortingComponent />
              </Box>
            )}
          </Flex>
          <Divider mx="auto" w="80%" />
          {products.isFetching && <ProductsLoader />}
          {!products.isFetching && products.isFetched && (
            <ProductsListComponent />
          )}
        </Box>
        <Divider mx="auto" w="80%" />
        {pagination.isFetched && <ProductsPagination />}
      </Grid>
    </Box>
  );
}
