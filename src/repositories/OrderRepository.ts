import { Repository } from './Repository';
import { IOrder } from '../types/shoppingCart';

class CartRepository extends Repository<IOrder> {
  constructor(storeKey: string) {
    super(storeKey);
  }
}

export const orderRepository = new CartRepository('orders');
