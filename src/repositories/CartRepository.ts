import { Repository } from './Repository';
import { ICart } from '../types/shoppingCart';

class CartRepository extends Repository<ICart> {
  constructor(storeKey: string) {
    super(storeKey);
  }
}

export const cartRepository = new CartRepository('carts');
