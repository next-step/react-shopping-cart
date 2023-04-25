import { Button } from 'components';

import OrderItem from '../OrderItem';
import { useOrders } from '../../hooks';

function OrderList() {
  const { data: orders = [] } = useOrders();

  return (
    <>
      {orders.map(({ id, orderDetails }) => (
        <div key={id} className="order-list">
          <div className="order-list__header">
            <span>주문번호: {id}</span>
            <Button>상세보기</Button>
          </div>
          {orderDetails.map((product) => (
            <OrderItem key={product.id} product={product} />
          ))}
        </div>
      ))}
    </>
  );
}

export default OrderList;
