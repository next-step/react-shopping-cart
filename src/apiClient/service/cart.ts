import httpRequest from '../httpRequest';
import { CartInfoType } from '../../types';

export const updateCartList = (payload?: CartInfoType) =>
  httpRequest({
    url: `/carts`,
    method: 'POST',
    data: payload,
  });
