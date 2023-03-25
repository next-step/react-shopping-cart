import { useQuery } from 'react-query';
import { getProduct, getProducts } from 'services/product';
import { ProductItem } from 'types/type';

const PRODUCTS_QUERY_KEY = 'products';
const PRODUCT_DETAIL_QUERY_KEY = 'productDetail';

export function useProductList() {
  // https://velog.io/@aeong98/React.js-React-Query
  const { data, isLoading, isError } = useQuery<ProductItem[]>(PRODUCTS_QUERY_KEY, getProducts, {
    staleTime: 60 * 1000, // 1분
    keepPreviousData: true, // 이전 데이터를 보여줌
  });

  return { data, isLoading, isError };
}

export function useSelectedProduct(productId: number) {
  const { data, isLoading, isError } = useQuery<ProductItem>(PRODUCT_DETAIL_QUERY_KEY, () => getProduct(productId));
  return { data, isLoading, isError };
}