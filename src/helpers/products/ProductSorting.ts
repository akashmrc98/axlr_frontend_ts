import { TProduct, TSort } from "@interfaces/products/ProductTypes";

export class ProductSorting {
  static byPrice(products: TProduct[], order: TSort) {
    if (order === "asc")
      products.sort((a, b) => {
        return a.price - b.price;
      });
    if (order === "desc")
      products.sort((a, b) => {
        return b.price - a.price;
      });
    return products;
  }

  static byRating(products: TProduct[], order: TSort) {
    if (order === "asc")
      products.sort((a, b) => {
        return a.rating - b.rating;
      });
    if (order === "desc")
      products.sort((a, b) => {
        return b.rating - a.rating;
      });
    return products;
  }
}
