import * as Styled from './Order.styles';

import { Payment } from 'components/Payment';
import { OrderItem } from 'components/Order/Item';
import { PageHeader } from 'components/common/PageHeader';
import { useEffect } from 'react';
import { useOrder } from 'hooks';
import uuid from 'react-uuid';

const Order = () => {
  const { GetOrder, orderList, totalPrice, totalAmount } = useOrder();
  useEffect(() => {
    GetOrder();
  }, []);

  return (
    <Styled.Layout>
      <PageHeader>주문/결제</PageHeader>
      <Styled.Container display={'flex'}>
        <Styled.LeftSectionLayout>
          <Styled.Title>{`주문 상품(${totalAmount}건)`}</Styled.Title>
          <Styled.DivideLine />
          {orderList?.map((product) => (
            <OrderItem
              key={uuid()}
              image={product.image}
              name={product.name}
              id={product.id}
              amount={product.amount}
              price={product.price}
            />
          ))}
        </Styled.LeftSectionLayout>
        <Styled.RightSectionLayout>
          <Payment title="결제금액" text="총 결제금액" price={totalPrice} totalAmount={totalAmount} type="order" />
        </Styled.RightSectionLayout>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default Order;
