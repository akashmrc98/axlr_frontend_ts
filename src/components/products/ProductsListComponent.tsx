import { Flex, Grid, Heading } from "@chakra-ui/react";
import ProductCardComponent from "./ProductCardComponent";

import { useProductStore } from "@store/useProductStore";

export default function ProductsListComponent() {
  const products = useProductStore((state) => state.products);
  return (
    <>
      {products ? (
        <Grid>
          {products.length > 0 ? (
            <Grid
              p={12}
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              }}
              rowGap="2rem"
              columnGap={"2rem"}
              transition="all 400ms ease-in-out"
            >
              {products.map((p, i) => (
                <ProductCardComponent key={i} {...p} />
              ))}
            </Grid>
          ) : (
            <Flex
              minH="40vh"
              p={4}
              alignItems="center"
              justifyContent={"center"}
            >
              <Heading py={4} textAlign={"center"}>
                {`Oops can't find any items.`}{" "}
              </Heading>
            </Flex>
          )}
        </Grid>
      ) : null}
    </>
  );
}
