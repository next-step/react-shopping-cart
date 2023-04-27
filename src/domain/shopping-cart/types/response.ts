import { IOrder, IProduct } from "./domain";

export interface IProductResponse {
  products: IProduct[];
  page: number;
  endOfPage: number;
}

export interface IOrderResponse {
  orders: IOrder[];
  // page: number;
  // endOfPage: number;
}
