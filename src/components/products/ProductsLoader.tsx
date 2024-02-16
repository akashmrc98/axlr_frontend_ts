import { Box } from "@chakra-ui/react";
import { ColorRing } from "react-loader-spinner";

export default function ProductsLoader() {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      minH="100vh"
      minW="100%"
    >
      <ColorRing
        visible={true}
        height="320"
        width="320"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </Box>
  );
}
