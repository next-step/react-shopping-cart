import { request, HTTP_METHOD } from '@/api/core';

export const getAllProducts = async (): Promise<Product[]> => {
  const data = await request('/products', HTTP_METHOD.GET());
  return data;
};
