import { useParams } from 'react-router-dom';

import { OrderItem } from 'components/domain';

import PaymentAmount from '../PaymentAmount';
import { useOrder } from '../../hooks';

function OrderDetailList() {
  const { id } = useParams();
  const { data: order } = useOrder(Number(id));

  const totalPrice = order?.orderDetails.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );

  return (
    <div className="order-list">
      <div className="order-list__header">
        <span>주문번호: {id}</span>
      </div>
      {order?.orderDetails.map((product) => (
        <OrderItem key={product.id} product={product} />
      ))}
      <PaymentAmount totalPrice={totalPrice ?? 0} />
    </div>
  );
}

export default OrderDetailList;
