import styled from 'styled-components';
import { Header } from 'components/Header';
import { OrderListHeader } from 'components/OrderListHeader';
import { OrderListItem } from 'components/OrderListItem';
import { Payment } from 'components/Payment';

const OrderListDetail = () => {
  return (
    <Layout>
      <div>
        <Header>주문내역 상세</Header>
        <OrderListHeader />
        <OrderListItem />
      </div>
      <PaymentContainer>
        <Box>
          <Payment title="결제 금액 정보" text="총 결제금액" price="325,000" />
        </Box>
      </PaymentContainer>
    </Layout>
  );
};

const Layout = styled.section`
  padding: 24px 300px;
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 50px 0;
`;
const Box = styled.div`
  width: 480px;
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
  div {
    padding: 0px;
  }
`;

export default OrderListDetail;
