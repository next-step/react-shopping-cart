import { OrderListHeader } from 'components/OrderListHeader';
import { OrderListItem } from 'components/OrderListItem';
import styled from 'styled-components';
import { Header } from 'components/Header';
const OrderList = () => {
  return (
    <Layout>
      <Header>주문 목록</Header>
      <OrderListHeader />
      <OrderListItem />
    </Layout>
  );
};
const Layout = styled.div`
  padding: 24px 300px;
`;
export default OrderList;
