import { useOrder } from 'domain/hooks';
import { useEffect } from 'react';
import { useAppSelector } from 'store';

const useMyOrderListPage = () => {
  const orderStore = useAppSelector((state) => state.orderReducer);
  const orderedList = orderStore.orderedList;
  const status = orderStore.status;
  const errorMessage = orderStore.errorMessage;

  const { getOrderItem } = useOrder();

  useEffect(() => {
    getOrderItem();
  }, []);

  return { status, errorMessage, orderedList };
};

export default useMyOrderListPage;
