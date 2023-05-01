import { useQuery } from 'react-query';
import { getProduct, fetchProducts } from 'services/product';

const PRODUCTS_QUERY_KEY = 'products';
const PRODUCT_DETAIL_QUERY_KEY = 'productDetail';

export function useProductList(page: number, pageSize: number) {
  const { data, isLoading, isError } = useQuery<Product[]>(
    [PRODUCTS_QUERY_KEY, page, pageSize], () => fetchProducts({ page, limit: pageSize }));

  return { data, isLoading, isError };
}

export function useSelectedProduct(productId: number) {
  const { data, isLoading, isError } = useQuery<Product>(PRODUCT_DETAIL_QUERY_KEY, () => getProduct(productId));
  return { data, isLoading, isError };
}