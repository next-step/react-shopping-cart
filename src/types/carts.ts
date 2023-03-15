import { Product } from './products';

export type Cart = {
  id: number;
  product: Product;
};

export type CartList = Cart[];
