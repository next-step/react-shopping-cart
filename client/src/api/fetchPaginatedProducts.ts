import { API } from 'constants/api';

import { PaginatedProductsSchema } from 'types/product';
import { PaginationParams } from 'types/api';

import apiClient from './apiClient';

export default async function fetchPaginatedProducts({ page, size }: PaginationParams) {
  const response = await apiClient.get(API.PRODUCTS, { page: String(page), size: String(size) });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return PaginatedProductsSchema.parse(data);
}
