import { PageHeader } from 'components/common/PageHeader';
import { OrderListHeader } from 'components/Order/Header';
import { OrderListItem } from 'components/Order/List/Item';
import { Payment } from 'components/Payment';
import * as Styled from './OrderListDetail.styles';

const OrderListDetail = () => {
  return (
    <Styled.Layout>
      <PageHeader>주문내역 상세</PageHeader>
      <div>
        <OrderListHeader />
        <OrderListItem />
      </div>

      <Styled.Container>
        <Styled.Box>
          <Payment title="결제 금액 정보" text="총 결제금액" price={325000} />
        </Styled.Box>
      </Styled.Container>
    </Styled.Layout>
  );
};
export default OrderListDetail;
