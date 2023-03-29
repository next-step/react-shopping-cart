import styled from 'styled-components';
import { OrderListHeader } from 'components/Order/List/Header';
import { OrderListItem } from 'components/Order/List/Item';
import { PageHeader } from 'components/common/PageHeader';
const OrderList = () => {
  return (
    <Layout>
      <PageHeader>주문 목록</PageHeader>
      <OrderListHeader />
      <OrderListItem />
    </Layout>
  );
};
const Layout = styled.div`
  padding: 24px 300px;
`;
export default OrderList;
