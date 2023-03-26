import httpRequest from './httpRequest';
import { CartItemType } from '../types';

export const updateCartList = (payload?: CartItemType) =>
  httpRequest({
    url: `/carts`,
    method: 'POST',
    data: payload,
  });
