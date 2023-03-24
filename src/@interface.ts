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

export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>;
