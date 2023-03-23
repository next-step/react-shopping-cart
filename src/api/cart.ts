import { httpGet } from '.';
import { ICartTypes } from '../@interface';
const URL = '/carts';

export const getAllCarts = async (): Promise<ICartTypes[]> => {
  const { data } = await httpGet(URL, '');
  return data;
};
