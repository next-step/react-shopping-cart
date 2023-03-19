import { useQuery } from 'react-query';
import { atom, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getProducts } from 'services/product';
import { ProductItem } from 'types/type';

const PRODUCTS_QUERY_KEY = 'products';

export const productListState = atom({
  key: 'productListState',
  default: [] as ProductItem[],
});


export function useProductList() {
  // https://velog.io/@aeong98/React.js-React-Query
  const { data, isLoading, isError } = useQuery<ProductItem[]>(PRODUCTS_QUERY_KEY, getProducts, {
    staleTime: 60 * 1000, // 1분
    keepPreviousData: true, // 이전 데이터를 보여줌
  });

  return { data, isLoading, isError };
}

export function useSelectedProduct(productId: number): ProductItem | undefined {
  const productList = useRecoilValue(productListState);
  const selectedProductLoadable = useRecoilValueLoadable(productListState);

  if (selectedProductLoadable.state === 'hasValue') {
    return productList.find(product => product.id === productId);
  }
}