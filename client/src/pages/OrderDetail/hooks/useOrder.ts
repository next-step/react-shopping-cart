import { useFetch, useRouter } from 'hooks';
import { fetchOrder } from 'api';

import { PATHS } from 'constants/router';

const createCacheKey = (id: number) => `order_${id}`;

function useOrder(id: number) {
  const router = useRouter();

  return useFetch({
    fetcher: () => fetchOrder(id),
    cacheKey: createCacheKey(id),
    onError: () => {
      alert('존재하지 않는 주문 내역입니다.');
      router.replace(PATHS.ORDER);
    },
  });
}

export default useOrder;
