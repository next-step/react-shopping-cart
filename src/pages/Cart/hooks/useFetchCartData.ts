import { ResponseReturn } from '@/api';
import { CartList } from '@/types';

import useSWR, { useSWRConfig } from 'swr';

function useFetchCartData() {
  const { mutate } = useSWRConfig();

  const { data, error, isLoading, mutate: boundMutate } = useSWR<ResponseReturn<CartList>>('/carts');

  const refetchCartData = () => mutate('/carts');

  return {
    data: data?.data || [],
    error,
    isLoading,
    refetchCartData,
    boundMutate,
  };
}

export default useFetchCartData;
