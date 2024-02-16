import axios from "axios";
import { authBearerHeader } from "@config/jwt";
import { TProduct } from "@interfaces/products/ProductTypes";

type UploadProductsProps = {
  file: File;
};

export class UploadProductsApi {
  static async upload({ file }: UploadProductsProps): Promise<TProduct[]> {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://localhost:3000/api/v1/products/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: authBearerHeader(),
          },
        }
      );
      const products: TProduct[] = [...response.data.data];
      return products;
    } catch (error) {
      throw error;
    }
  }
}
