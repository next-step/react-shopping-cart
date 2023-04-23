import { API } from 'constants/api';

import { PaginatedProductsSchema } from 'types/product';
import { PaginationParams } from 'types/api';

import apiClient from './apiClient';

export default async function fetchPaginatedProducts({ page, size }: PaginationParams) {
  const data = await apiClient.get(API.PRODUCTS, { page: String(page), size: String(size) });

  return PaginatedProductsSchema.parse(data);
}
