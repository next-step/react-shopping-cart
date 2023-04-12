import { HTTP_METHOD, request } from '@/api/core';

const localCache: { [key: string]: PaginationResponse<Product> } = {};

export const getAllProducts = async (): Promise<Product[]> => {
  const data = await request<Product[]>('/products', HTTP_METHOD.GET());
  return data;
};

export const getPaginatedProducts = async ({
  page = 1,
  limit = 10,
}): Promise<PaginationResponse<Product>> => {
  const url = `/products?_page=${page}&_limit=${limit}`;
  const data = await request<PaginationResponse<Product>>(
    url,
    HTTP_METHOD.GET({ cache: 'public max-age=31536000' })
  );

  localCache[page] = data;

  return {
    ...data,
    data: Object.values(localCache).flatMap((item) => item),
    page,
    nextPage: page + 1,
    limit,
  } as unknown as PaginationResponse<Product>;
};
