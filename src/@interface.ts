import { AxiosResponse } from 'axios';
import { MouseEvent } from 'react';

export interface IProductTypes {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export interface IOrderTypes {
  id: number;
  orderDetails: Array<IOrderDetailTypes>;
}

export interface IOrderDetailTypes extends IProductTypes {
  quantity: number;
}
export interface ICartTypes {
  id: number;
  product: IProductTypes;
}
export interface ICartRequestBody {
  product: IProductTypes;
}
export interface IResponse {
  ok: string;
  message: string;
}

export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>;
