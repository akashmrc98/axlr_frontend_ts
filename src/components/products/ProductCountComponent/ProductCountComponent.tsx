import { Box, Text } from "@chakra-ui/react";
import { useProductStore } from "@store/useProductStore";

const ProductCountComponent: React.FC = () => {
  const LIMIT: number = 40;
  const { pagination } = useProductStore((state) => state);

  const minItems: number = pagination.currentPage * LIMIT - 39;
  const maxItems: number = pagination.currentPage * LIMIT;
  const totalItems: number = pagination.pages.length * LIMIT;

  return (
    <Box>
      <Text>{`Showing page ${pagination.currentPage} - ${pagination.totalPages}.`}</Text>
      <Text>{`Results ${minItems}-${maxItems} Results of ${totalItems}.`}</Text>
    </Box>
  );
};

export default ProductCountComponent;
