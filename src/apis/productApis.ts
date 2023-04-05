import axios from 'axios';

import type { ProductPOJO } from '@/models';

interface GetProductsProps {
  page?: number;
}

export function getProducts({ page }: GetProductsProps) {
  return axios
    .get('/products', { params: { page } })
    .then((res) => res.data as { products: ProductPOJO[]; nextPage: number });
}
