import { Repository } from './Repository';
import { IOrder } from '../types/shoppingCart';
import { orders } from '../mocks/data';

class CartRepository extends Repository<IOrder> {
  constructor(storeKey: string, initialItems: IOrder[]) {
    super(storeKey, initialItems);
  }
}

export const orderRepository = new CartRepository('orders', orders);
