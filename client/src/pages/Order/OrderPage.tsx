import * as Styled from './OrderPage.styles';
import Payment from 'components/domain/Payment';
import OrderdItem from 'components/domain/Order/OrdredItem';
import { PageHeader } from 'components/common/PageHeader';
import { useEffect } from 'react';
import { useOrder } from 'hooks';
import uuid from 'react-uuid';
import { useAppSelector } from 'store';

const OrderPage = () => {
  const { getOrderItem } = useOrder();

  const orderedList = useAppSelector((state) => state.order.orderedList[0]);
  const totalAmount = orderedList.ordered.totalAmount;
  const totalPrice = orderedList.ordered.totalPrice;
  const ordredItems = orderedList.ordered.item;

  useEffect(() => {
    getOrderItem();
  }, []);

  return (
    <Styled.Layout>
      <PageHeader>주문/결제</PageHeader>
      <Styled.SectionContainer>
        <Styled.ItemSection>
          <Styled.Title>{`주문 상품(${totalAmount}건)`}</Styled.Title>
          <Styled.DivideLine />
          {ordredItems.map((product) => (
            <OrderdItem
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
          <Payment title="결제금액" price={totalPrice} totalAmount={totalAmount} type="order" />
        </Styled.PaymentSection>
      </Styled.SectionContainer>
    </Styled.Layout>
  );
};

export default OrderPage;
