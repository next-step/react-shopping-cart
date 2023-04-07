import * as Styled from './MyOrderListDetailPage.styles';
import { PageHeader } from 'common/components';
import { MyOrderListHeader, MyOrderListItem, Payment } from 'common/components/Domain';

const MyOrderListDetailPage = () => {
  return (
    <Styled.Layout>
      <PageHeader>주문내역 상세</PageHeader>
      {/* <div>
        <OrderListHeader />
        <OrderListItem />
      </div> */}

      <Styled.Container>
        <Styled.Box>
          <Payment type="orderDetail" title="결제 금액 정보" price={325000} />
        </Styled.Box>
      </Styled.Container>
    </Styled.Layout>
  );
};
export default MyOrderListDetailPage;
