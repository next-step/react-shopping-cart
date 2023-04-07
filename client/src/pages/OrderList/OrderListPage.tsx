import * as Styled from './OrderListPage.styles';

import OrderListHeader from 'components/domain/Order/MyOrderList/Header';
import OrderListItem from 'components/domain/Order/MyOrderList/Item';
import { PageHeader } from 'components/common/PageHeader';
const OrderListPage = () => {
  return (
    <Styled.Layout>
      <PageHeader>방금 주문한 목록</PageHeader>
      <OrderListHeader />
      <OrderListItem />
    </Styled.Layout>
  );
};

export default OrderListPage;
