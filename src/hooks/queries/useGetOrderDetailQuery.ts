import { useQuery } from '@tanstack/react-query';
import { getOrderDetail } from '@/apis/Order/getOrderDetail';
import { ORDER_QUERY_KEYS } from '@/constants/queryKey';

type UseGetOrderDetailQuery = {
  id: number;
};

export const useGetOrderDetailQuery = ({ id }: UseGetOrderDetailQuery) => {
  const { data } = useQuery({
    queryKey: ORDER_QUERY_KEYS.DETAIL(id),
    queryFn: () => getOrderDetail({ id }),
    staleTime: 60 * 60 * 24 * 1000,
    gcTime: 60 * 60 * 24 * 1000,
    enabled: !!id,
  });

  const orderDetails = data?.orderDetails || [];

  return { orderDetails };
};
