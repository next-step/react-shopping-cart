import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as orderApi from '@/api/order';
import { Button, Header, Text } from '@/components/common';
import {
  PaymentListSection,
  PaymentTotalDisplaySection,
} from '@/components/domain';
import { ORDER } from '@/constant/stateKey';
import { useRouter } from '@/routes/useRouter';

const Payment = () => {
  const { go } = useRouter();
  const { state: orderState } = useLocation();
  const { [ORDER]: order = [] } = orderState as { order: UserCart[] };
  const hasOrder = order.length > 0;
  const orderTotalPrice = order.reduce(
    (accPrice, { product, quantity }) => accPrice + product.price * quantity,
    0
  );

  const handlePayment = useCallback(async () => {
    const result = confirm('결제하시겠습니까?');
    if (!result) return;
    await orderApi.postAddOrder({
      orderDetails: order.map((item) => ({
        ...item.product,
        quantity: item.quantity,
      })),
    });
    alert('결제가 완료되었습니다.');
    go('/orders');
  }, []);

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
        <PaymentTotalDisplaySection
          totalPrice={orderTotalPrice}
          onClickPayment={handlePayment}
        />
      </div>
    </section>
  );
};

export default Payment;
