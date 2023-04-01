import { Product } from 'types/products';

export interface CartItem extends Product {
  quantity: number;
}
export interface Cart {
  id: number;
  product: CartItem;
}
