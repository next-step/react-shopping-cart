import { UseQueryResult, useQuery } from 'react-query';
import { atom, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getOrders } from 'services/order';
import { Order, OrderDetail } from 'types/type';

const ORDER = 'order'

export const orderListState = atom({
  key: 'orderListState',
  default: [] as Order[],
})

export const detailListState = atom({
  key: 'detailListState',
  default: [] as OrderDetail[],
})

export function useOrderList(): UseQueryResult<Order[], Error> {
  const { data, isLoading, isError } = useQuery([ORDER], () => getOrders());

  return { data, isLoading, isError } as UseQueryResult<Order[], Error>;
}

export function useSelectOrder(orderId: number): OrderDetail[] | undefined {
  const orderList = useRecoilValue(orderListState);
  const selectedOrderItemLoadable = useRecoilValueLoadable(orderListState);

  if (selectedOrderItemLoadable.state === 'hasValue') {
    return orderList.find(order => order.id === orderId)?.orderDetails;
  }
}

