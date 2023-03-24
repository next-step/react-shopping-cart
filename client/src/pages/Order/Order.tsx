import * as Styled from './Order.styles';

import { Payment } from 'components/Payment';
import { OrderItem } from 'components/Order/Item';
import { PageHeader } from 'components/common/PageHeader';

const Order = () => {
  return (
    <Styled.Layout>
      <PageHeader>주문/결제</PageHeader>
      <Styled.Container display={'flex'}>
        <Styled.LeftSectionLayout>
          <Styled.Title>주문 상품(3건)</Styled.Title>
          <Styled.DivideLine />
          <OrderItem />
        </Styled.LeftSectionLayout>
        <Styled.RightSectionLayout>
          <Payment title="결제금액" text="총 결제금액" price={21800} buttonText="21,800원 결제하기" />
        </Styled.RightSectionLayout>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default Order;
