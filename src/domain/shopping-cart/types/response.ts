import { IOrder, IProduct } from './domain';

export interface IProductResponse {
  products: IProduct[];
}

export interface IOrderResponse {
  orders: IOrder[];
}
