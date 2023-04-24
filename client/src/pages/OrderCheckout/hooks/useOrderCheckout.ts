import { useFetch } from 'hooks';

import { fetchOrderCheckout } from 'api';

const CACHE_KEY = 'orderCheckout';

function useOrderCheckout() {
  return useFetch({
    fetcher: fetchOrderCheckout,
    cacheKey: CACHE_KEY,
    cacheTime: 0,
  });
}

export default useOrderCheckout;
