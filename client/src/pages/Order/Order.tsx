import { ExpectedPayment } from 'components/ExpectedPayment';
import { OrderItem } from 'components/OrderItem';
import * as Styled from './Order.styles';

const Order = () => {
  return (
    <Styled.Layout>
      <Styled.MainHeader>주문/결제</Styled.MainHeader>
      <Styled.Container display={'flex'}>
        <LeftSection />
        <RightSection />
      </Styled.Container>
    </Styled.Layout>
  );
};

const LeftSection = () => {
  return (
    <Styled.LeftSectionLayout>
      <Styled.Title>주문 상품(3건)</Styled.Title>
      <Styled.DivideLine />
      <OrderItem />
    </Styled.LeftSectionLayout>
  );
};
const RightSection = () => {
  return (
    <Styled.RightSectionLayout>
      <ExpectedPayment title="결제금액" text="총 결제금액" price="21,800원" buttonText="21,800원 결제하기" />
    </Styled.RightSectionLayout>
  );
};
export default Order;
