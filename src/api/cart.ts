import { HTTP_METHOD, request } from '@/api/core';

export const postAddCart = async (product: Product): Promise<Cart> => {
  const data = await request<Cart>('/carts', HTTP_METHOD.POST({ product }));
  return data;
};

export const getAllCarts = async (): Promise<Cart[]> => {
  const data = await request<Cart[]>(
    '/carts',
    HTTP_METHOD.GET({ cache: 's-maxage=31536000, max-age=0' })
  );
  return data;
};

export const removeCart = async (cartId: string): Promise<void> => {
  const data = await request<void>(`/carts/${cartId}`, HTTP_METHOD.DELETE());
  return data;
};
