import axios from 'axios';

import type { ProductPOJO } from '@/models';

export function getProducts(): Promise<ProductPOJO[]> {
  return axios.get('/products').then((res) => res.data as ProductPOJO[]);
}
