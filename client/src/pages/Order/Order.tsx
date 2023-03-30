import * as Styled from './Order.styles';

import { Payment } from 'components/domain/Payment';
import { OrderItem } from 'components/domain/Order/Item';
import { PageHeader } from 'components/common/PageHeader';
import { useEffect } from 'react';
import { useOrder } from 'hooks';
import uuid from 'react-uuid';

const OrderPage = () => {
  const { GetOrder, orderList, totalPrice, totalAmount } = useOrder();
  useEffect(() => {
    GetOrder();
  }, []);

  return (
    <Styled.Layout>
      <PageHeader>주문/결제</PageHeader>
      <Styled.SectionContainer>
        <Styled.ItemSection>
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
        </Styled.ItemSection>
        <Styled.PaymentSection>
          <Payment title="결제금액" text="총 결제금액" price={totalPrice} totalAmount={totalAmount} type="order" />
        </Styled.PaymentSection>
      </Styled.SectionContainer>
    </Styled.Layout>
  );
};

export default OrderPage;
