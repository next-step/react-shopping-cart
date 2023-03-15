import { http } from '../client/httpClient';
import { IProduct } from '../types';

const BASE_URL = '/products';

export const productList = async (): Promise<IProduct[]> => {
  const response = await http.get(BASE_URL);

  return response.data;
};
