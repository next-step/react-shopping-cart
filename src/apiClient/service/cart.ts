import httpRequest from '../httpRequest';
import { CartItemType } from '../../types';

export const addCartItem = (payload?: CartItemType) =>
  httpRequest({
    url: `/carts`,
    method: 'POST',
    data: payload,
  });
