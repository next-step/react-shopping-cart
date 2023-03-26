import { request, HTTP_METHOD } from '@/api/core';

export const postAddCart = async (product: Product): Promise<Product> => {
  const data = await request('/carts', HTTP_METHOD.POST({ product }));
  return data;
};

export const getAllCarts = async (): Promise<Cart[]> => {
  const data = await request('/carts', HTTP_METHOD.GET());
  return data;
};

export const removeCart =async  (cartId : string): Promise<void> => {
  const data = await request(`/carts/${cartId}`, HTTP_METHOD.DELETE())
  return data
}