import { MouseEvent } from 'react';

export interface IProductTypes {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export interface IOrderTypes {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface ICartTypes {
  id: number;
  product: Array<IProductTypes>;
}

export type CustomMouseEvent<T = HTMLElement> = MouseEvent<T>;
