import { HTTP_METHOD, request } from '@/api/core';

const cache: { [key: string]: PaginationResponse<Product> } = {};

export const getAllProducts = async (): Promise<Product[]> => {
  const data = await request('/products', HTTP_METHOD.GET());
  return data;
};

export const getPaginatedProducts = async ({
  page = 1,
  limit = 10,
}): Promise<PaginationResponse<Product>> => {
  const data = await request(
    `/products?_page=${page}&_limit=${limit}`,
    HTTP_METHOD.GET()
  );
  cache[page] = data;

  return {
    ...data,
    data: Object.values(cache).flatMap((item) => item),
    page,
    nextPage: page + 1,
    limit,
  };
};
