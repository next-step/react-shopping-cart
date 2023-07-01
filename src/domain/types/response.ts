import { ICartItem, IOrder, IProduct } from "./domain";

export interface IRequestPaging {
  page: number;
  unit: number;
}
export interface IResponsePager {
  page: number;
  endOfPage: number;
}
export interface IProductResponse extends IResponsePager {
  products: IProduct[];
}

export interface ICartResponse extends IResponsePager {
  items: ICartItem[];
}

export interface IRequestOrderPaging {
  page: number;
  unit: number;
}

export interface IOrderResponse extends IResponsePager {
  orders: IOrder[];
}

export interface IResponseError {
  message?: string;
  response: { data: { customMessage?: string } };
}
