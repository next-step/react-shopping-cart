import { ICart, IProduct } from '../types/shoppingCart';
import { http } from '../client/httpClient';

const BASE_URL = '/carts';

export function CartService() {
  const addCart = (item: IProduct): void => {
    const cartItem: ICart = {
      id: new Date().getTime(),
      product: item
    };

    http.post(BASE_URL, cartItem);
  };

  return {
    addCart
  };
}
