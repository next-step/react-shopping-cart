import { useQuery } from '@tanstack/react-query';
import { getOrder } from '@/apis/Order/getOrder';
import { ORDER_QUERY_KEYS } from '@/constants/queryKey';
import { Order } from '@/types/order';

export const useGetOrderQuery = () => {
  return useQuery<Order[]>({
    queryKey: ORDER_QUERY_KEYS.LISTS(),
    queryFn: getOrder,
  });
};
