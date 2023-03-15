import { Header } from 'components/Header';
import { OrderListHeader } from 'components/OrderListHeader';
import { OrderListItem } from 'components/OrderListItem';
import { Payment } from 'components/Payment';
import * as Styled from './OrderListDetail.styles';

const OrderListDetail = () => {
  return (
    <Styled.Layout>
      <div>
        <Header>주문내역 상세</Header>
        <OrderListHeader />
        <OrderListItem />
      </div>
      <Styled.Container>
        <Styled.Box>
          <Payment title="결제 금액 정보" text="총 결제금액" price="325,000" />
        </Styled.Box>
      </Styled.Container>
    </Styled.Layout>
  );
};
export default OrderListDetail;
