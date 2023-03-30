import * as Styled from './OrderList.styles';

import { OrderListHeader } from 'components/domain/Order/List/Header';
import { OrderListItem } from 'components/domain/Order/List/Item';
import { PageHeader } from 'components/common/PageHeader';
const OrderListPage = () => {
  return (
    <Styled.Layout>
      <PageHeader>주문 목록</PageHeader>
      <OrderListHeader />
      <OrderListItem />
    </Styled.Layout>
  );
};

export default OrderListPage;
