import { ICart, IOrder, IProduct } from "./domain";

export interface IResponsePager {
  page: number;
  endOfPage: number;
}
export interface IProductResponse extends IResponsePager {
  products: IProduct[];
}

export interface ICartResponse extends IResponsePager {
  cart: ICart;
}

export interface IOrderResponse extends IResponsePager {
  orders: IOrder[];
}
