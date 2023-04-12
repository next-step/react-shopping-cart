import { Text } from '@/components/common';
import { OrderListItemDetail } from '@/components/domain';

type Props = {
  order: Order;
};

const OrderListItem = ({ order }: Props) => {
  return (
    <>
      <div className="order-list__header">
        <Text>주문번호: {order.id}</Text>
      </div>
      {order.orderDetails.map((orderDetail) => (
        <OrderListItemDetail key={orderDetail.id} orderDetail={orderDetail} />
      ))}
    </>
  );
};

export default OrderListItem;
