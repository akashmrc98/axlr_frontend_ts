import { useNavigate } from "react-router";
import { removeToken } from "@config/jwt";

import { useProductUploadStore } from "@store/useProductsUploadStore";
import { UploadProductsApi } from "@api/uploadProducts/uploadProductsApi";

export function useProductsUpload() {
  const navigate = useNavigate();
  const { setProducts, pagination, setPagination } = useProductUploadStore(
    (state) => state
  );
  const uploadFile = async (file: File) => {
    try {
      const products = await UploadProductsApi.upload({ file });
      setProducts([...products]);
      const ITEMS_PER_VIEW = 8;
      const totalProducts = products.length;
      const totalPages = totalProducts / ITEMS_PER_VIEW;
      const pages = [];
      for (let i = 1; i < totalPages; i++) pages.push(i);
      setPagination({
        ...pagination,
        pages,
        currentPage: 1,
        totalPages,
        totalProducts,
      });
      return [products];
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        removeToken();
        navigate("/");
      }, 5000);
    }
  };
  return { uploadFile };
}
