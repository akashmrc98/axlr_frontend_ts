import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";
import { useProductsUpload } from "@hooks/uploadProducts/useProductsUpload/useProductsUpload";

export default function ProductsUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleProductFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const { uploadFile } = useProductsUpload();

  function upload() {
    if (selectedFile) uploadFile(selectedFile);
  }

  return (
    <Grid py={6} px={24}>
      <Heading>Upload</Heading>
      <Grid py={4}>
        <Box>
          <FormControl>
            <FormLabel>File</FormLabel>
            <Input onChange={handleProductFileChange} type={"file"} />
          </FormControl>
          <Button mt={4} onClick={upload}>
            Upload
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
