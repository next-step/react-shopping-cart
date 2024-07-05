import { useQuery } from '@tanstack/react-query';
import { getOrders } from '@/apis/Order/getOrders';
import { ORDER_QUERY_KEYS } from '@/constants/queryKey';
import { Order } from '@/types/order';

export const useGetOrdersQuery = () => {
  const { data: orders } = useQuery({
    queryKey: ORDER_QUERY_KEYS.LISTS(),
    queryFn: getOrders,
    staleTime: 60 * 60 * 24 * 1000,
    gcTime: 60 * 60 * 24 * 1000,
  });

  return { orders } as { orders: Order[] };
};
