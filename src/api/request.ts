import axiosRequest from './axios';
import { CartItemType } from '../types';

export const updateCartList = (payload: CartItemType | undefined) =>
  axiosRequest({
    url: `${process.env.REACT_APP_API_PATH}/carts`,
    method: 'POST',
    data: payload,
  });
