import { UseQueryResult, useQuery } from 'react-query';
import { getProducts } from 'services/product';
import { ProductItem } from 'types/type';


export function useProduct(): UseQueryResult<ProductItem[], Error> {
  return useQuery(['product'], () => getProducts());
}

