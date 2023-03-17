import { Repository } from './Repository';
import { IProduct } from '../types/shoppingCart';

class CartRepository extends Repository<IProduct> {
  constructor(storeKey: string) {
    super(storeKey);
  }
}

export const productRepository = new CartRepository('products');
