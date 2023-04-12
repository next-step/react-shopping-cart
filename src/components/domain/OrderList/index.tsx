import * as orderApi from '@/api/order';
import { Text } from '@/components/common';
import { OrderListItem, OrderSkeleton } from '@/components/domain';
import useHttp from '@/hooks/useHttp';
import useOnMounted from '@/hooks/useOnMounted';

type Props = {
  onOpen: () => void;
};

const OrderList = ({ onOpen }: Props) => {
  const { sendRequest, loading, data: orders } = useHttp(orderApi.getAllOrders);

  useOnMounted(() => {
    sendRequest();
  });

  if (loading) return <OrderSkeleton />;
  if (!orders) return <Text>주문 된 상품이 없어요!</Text>;

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderListItem key={order.id} order={order} onOpen={onOpen} />
      ))}
    </div>
  );
};

export default OrderList;
