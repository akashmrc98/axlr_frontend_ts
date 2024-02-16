import axios from "axios";
import { ProductSorting } from "@helpers/products/ProductSorting";
import { authBearerHeader } from "@config/jwt";
import {
  TFilters,
  TProduct,
  TSorts,
  TPagination,
} from "@interfaces/products/ProductTypes";

type Params = { page: number | 1 } & TFilters;

type GetProductsProps = {
  sort: TSorts;
  params: Params;
  signal: AbortSignal;
};

type GetProductsPaginationProps = {
  params: Params;
  signal: AbortSignal;
};

export class ProductApi {
  static async getPagination({
    params,
    signal,
  }: GetProductsPaginationProps): Promise<TPagination> {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/products/pagination`,
        {
          params,
          signal,
          headers: {
            Authorization: authBearerHeader(),
          },
        }
      );
      const pagination: TPagination = { ...response.data.pagination };
      return pagination;
    } catch (error) {
      throw error;
    }
  }

  static async getProducts({
    sort,
    params,
    signal,
  }: GetProductsProps): Promise<TProduct[]> {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/products/`,
        {
          params,
          signal,
          headers: {
            Authorization: authBearerHeader(),
          },
        }
      );
      ProductSorting.byRating(response.data.products, sort.rating);
      ProductSorting.byPrice(response.data.products, sort.price);
      const products: TProduct[] = [...response.data.products];
      return products;
    } catch (error) {
      throw error;
    }
  }
}
