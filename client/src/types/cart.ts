import { Product } from './product';

export interface Cart {
  id: number;
  product: Product;
  count: number;
}
