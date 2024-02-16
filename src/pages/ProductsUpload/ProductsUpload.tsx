import Navbar from "@components/common/Navbar";
import ProductsUploadForm from "@components/productsUpload/ProductsUploadForm/ProductsUploadForm";
import ProductsUploadedTable from "@components/productsUpload/ProductsUploadedTable/ProductsUploadedTable";
import ProductsUploadedPagination from "@components/productsUpload/ProductsUploadPagination/ProductsUploadPagination";

export default function ProductsUpload() {
  return (
    <>
      <Navbar />
      <ProductsUploadForm />
      <ProductsUploadedTable />
      <ProductsUploadedPagination />
    </>
  );
}
