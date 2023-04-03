import { ResponseReturn } from '@/api';
import { CartList } from '@/types';

import useSWR, { useSWRConfig } from 'swr';

function useCartData() {
  const { mutate } = useSWRConfig();

  const { data, error, isLoading, mutate: boundMutate } = useSWR<ResponseReturn<CartList>>('/carts');

  const refreshCart = () => mutate('/carts');

  return {
    data: data?.data || [],
    error,
    isLoading,
    refreshCart,
    boundMutate,
  };
}

export default useCartData;
