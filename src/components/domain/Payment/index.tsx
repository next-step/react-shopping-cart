import { Link, useLocation } from 'react-router-dom';

import { Button, Header, Text } from '@/components/common';
import {
  PaymentListSection,
  PaymentTotalDisplaySection,
} from '@/components/domain';
import { ORDER } from '@/constant/stateKey';

const Payment = () => {
  const { state: orderState } = useLocation();
  const { [ORDER]: order = [] } = orderState as { order: UserCart[] };
  const hasOrder = order.length > 0;
  const orderTotalPrice = order.reduce(
    (accPrice, { product, quantity }) => accPrice + product.price * quantity,
    0
  );

  if (!hasOrder) {
    return (
      <section className="order-section">
        <Text>장바구니에서 상품을 다시 주문해주세요.</Text>
        <Link to="/cart">
          <Button theme="primary" size="small">
            장바구니로 이동
          </Button>
        </Link>
      </section>
    );
  }

  return (
    <section className="order-section">
      <Header title="주문/결제" />
      <div className="flex">
        <PaymentListSection order={order} />
        <PaymentTotalDisplaySection totalPrice={orderTotalPrice} />
      </div>
    </section>
  );
};

export default Payment;
