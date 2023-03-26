import { HTTP_METHOD, request } from '@/api/core';

export const getAllProducts = async (): Promise<Product[]> => {
  const data = await request('/products', HTTP_METHOD.GET());
  return data;
};
