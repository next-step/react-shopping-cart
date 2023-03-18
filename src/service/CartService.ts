import { IProduct } from '../types/shoppingCart';
import { http } from '../client/httpClient';

const BASE_URL = '/carts';

export function CartService() {
  const addCart = (item: IProduct): void => {
    http.post(BASE_URL, item);
  };

  return {
    addCart
  };
}
