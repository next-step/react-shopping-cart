import { Product, ProductList } from './products';

export type Cart = {
  id: number;
  product: ProductList;
};

export type CartList = Cart[];

export type ProductWithQuantity = Product & { quantity: number };

export type CartWithProductQuantity = {
  id: number;
  product: ProductWithQuantity;
};
