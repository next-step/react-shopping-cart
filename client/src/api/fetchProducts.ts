import { API } from 'constants/api';
import { ProductsSchema } from 'types/product';

import apiClient from './apiClient';

export default async function fetchProducts() {
  const response = await apiClient.get(API.PRODUCTS);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return ProductsSchema.parse(data);
}
