import { request, HTTP_METHOD } from '@/api/core';

export const getAllProducts = async (): Promise<Product[]> => {
  const { response } = await request('/products', HTTP_METHOD.GET());
  return response;
};
