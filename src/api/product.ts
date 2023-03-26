import { HTTP_METHOD, request } from '@/api/core';

export const getAllProducts = async (): Promise<Product[]> => {
  const data = await request('/products', HTTP_METHOD.GET());
  return data;
};

export const getPaginatedProducts = async ({
  start = 1,
  end = 10,
}): Promise<Product[]> => {
  const data = await request(
    `/products?_start=${start}&_end=${end}`,
    HTTP_METHOD.GET()
  );
  return data;
};
