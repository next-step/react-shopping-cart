import { API } from 'constants/api';

import { PaginatedProductsSchema } from 'types/product';
import { PaginationParams } from 'types/api';

export default async function fetchPaginatedProducts({ page, size }: PaginationParams) {
  const response = await fetch(`${API.PRODUCTS}?page=${page}&size=${size}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return PaginatedProductsSchema.parse(data);
}
