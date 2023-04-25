import { useFetch } from 'hooks';

import { fetchOrders } from 'api';

const CACHE_KEY = 'orders';

function useOrders() {
  return useFetch({
    fetcher: fetchOrders,
    cacheKey: CACHE_KEY,
  });
}

export default useOrders;
