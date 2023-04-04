import * as Styled from './OrderListDetailPage.styles';
import { PageHeader } from 'components/common/PageHeader';
import OrderListHeader from 'components/domain/Order/List/Header';
import OrderListItem from 'components/domain/Order/List/Item';
import Payment from 'components/domain/Payment';

const OrderListDetailPage = () => {
  return (
    <Styled.Layout>
      <PageHeader>주문내역 상세</PageHeader>
      <div>
        <OrderListHeader />
        <OrderListItem />
      </div>

      <Styled.Container>
        <Styled.Box>
          <Payment type="orderDetail" title="결제 금액 정보" price={325000} />
        </Styled.Box>
      </Styled.Container>
    </Styled.Layout>
  );
};
export default OrderListDetailPage;
