import { API } from 'constants/api';
import { ProductsSchema } from 'types/product';

import apiClient from '../apiClient';

export default async function fetchProducts() {
  const data = await apiClient.get(API.PRODUCTS);

  return ProductsSchema.parse(data);
}
