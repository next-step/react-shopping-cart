import httpRequest from '../httpRequest';
import { CartItemType } from '../../types';
import { UpdateType } from '../../mocks/handlers';
export interface SelectIdType {
  selectId: number;
}

export type SelectIdArr = number[];
export const addCartItem = (payload?: CartItemType) =>
  httpRequest({
    url: `/carts`,
    method: 'POST',
    data: payload,
  });

export const deleteCartItem = (payload?: SelectIdType) =>
  httpRequest({
    url: `/carts`,
    method: 'DELETE',
    data: payload,
  });

export const deleteSelectedCartItem = (payload?: SelectIdArr) =>
  httpRequest({
    url: `/carts/select`,
    method: 'DELETE',
    data: payload,
  });

export const updateItemCount = (payload?: UpdateType) =>
  httpRequest({
    url: '/carts/count',
    method: 'PUT',
    data: payload,
  });
