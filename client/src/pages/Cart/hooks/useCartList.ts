import { useFetch } from 'hooks';

import { useCartActions } from 'store/cart';

import { fetchCarts } from 'api';
import { Carts } from 'types/cart';

const CACHE_KEY = 'carts';

function useCartList() {
  const { initialize } = useCartActions();

  return useFetch<Carts>({
    fetcher: fetchCarts,
    cacheKey: CACHE_KEY,
    cacheTime: 0,
    onSuccess: (data) => initialize(data),
  });
}

export default useCartList;
