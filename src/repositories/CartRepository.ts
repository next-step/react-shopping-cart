import { Repository } from './Repository';
import { ICart } from '../types/shoppingCart';
import { carts } from '../mocks/data';

class CartRepository extends Repository<ICart> {
  constructor(storeKey: string, initialItems: ICart[]) {
    super(storeKey, initialItems);
  }
}

export const cartRepository = new CartRepository('carts', carts);
