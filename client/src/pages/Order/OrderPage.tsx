import * as Styled from './OrderPage.styles';
import { OrderdItem, Payment } from 'common/components/Domain';
import { PageHeader } from 'common/components';
import { useEffect } from 'react';
import { useOrder } from 'common/hooks';
import uuid from 'react-uuid';
import { useAppSelector } from 'store';

const OrderPage = () => {
  const { getOrderItem } = useOrder();

  const orderedList = useAppSelector((state) => state.order.orderedList);
  const orderListLength = orderedList.length;

  const recentlyOrderedItem = orderedList[orderListLength - 1];
  const totalAmount = recentlyOrderedItem.ordered.totalAmount;
  const totalPrice = recentlyOrderedItem.ordered.totalPrice;
  const ordredItems = recentlyOrderedItem.ordered.item;

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
              id={product.id}
              key={uuid()}
              image={product.image}
              name={product.name}
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
