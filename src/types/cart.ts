import { Product } from './product';

export interface CartProduct {
  id: number;
  product: Product;
  quantity?: number;
}

export type CartState = {
  state: {
    cart: CartProduct[];
  };
  version: number;
};
