import { Product } from './product';

export type Cart = {
  id: number;
  product: Product;
};

export type CartList = Cart[];
