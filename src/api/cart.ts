import { AxiosResponse } from 'axios';
import { httpGet, httpPost } from '.';
import { ICartRequestBody, ICartTypes, IProductTypes, IResponse } from '../@interface';
const URL = '/carts';

export const getAllCarts = async (): Promise<ICartTypes[]> => {
  const { data } = await httpGet(URL, '', true);
  return data;
};

export const insertCarts = async (product: IProductTypes): Promise<IResponse> => {
  const requestBody: ICartRequestBody = { product };
  const { data } = await httpPost(URL, requestBody, true);
  return data;
};
