import { request, HTTP_METHOD } from '@/api/core';

export const postAddCart = async (product: Product): Promise<Product> => {
  const data = await request('/carts', HTTP_METHOD.POST({ product }));
  return data;
};
