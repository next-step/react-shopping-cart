import { UseQueryResult, useMutation, useQuery } from 'react-query';
import { atom } from 'recoil';
import { addOrder, getOrders } from 'services/order';

const ORDER = 'order'

export const orderState = atom<OrderDetail[]>({
  key: 'orderState',
  default: [] as OrderDetail[]
});

export function useOrderList(): UseQueryResult<Order[], Error> {
  const { data, isLoading, isError } = useQuery([ORDER], () => getOrders());

  return { data, isLoading, isError } as UseQueryResult<Order[], Error>;
}

export function useOrder() {

  return useMutation((item: OrderDetail[]) => addOrder(item), {
    onSuccess: (orderItem) => {
      console.log("success", orderItem)
    },
    onError: (error: Error) => {
      throw new Error(`Failed to add cart item: ${error.message}`);
    },
  });
}