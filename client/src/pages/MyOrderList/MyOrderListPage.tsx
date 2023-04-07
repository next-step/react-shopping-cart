import * as Styled from './MyOrderListPage.styles';

import { useOrder } from 'hooks';
import { useEffect } from 'react';
import { useAppSelector } from 'store';
import { PageHeader } from 'components/common/PageHeader';
import MyOrderListHeader from 'components/domain/Order/MyOrderList/Header/MyOrderListHeader.';
import MyOrderListItem from 'components/domain/Order/MyOrderList/Item/MyOrderListItem';
import uuid from 'react-uuid';

const MyOrderListPage = () => {
  const { getOrderItem } = useOrder();
  const orderedList = useAppSelector((state) => state.order.orderedList);
  const MyorderListHeaderItems = orderedList.map((item) => <MyOrderListHeader id={item.id} key={uuid()} />);
  const MyorderListOrdredItems = orderedList.map((items) =>
    items.ordered.item.map((item) => (
      <MyOrderListItem price={item.price} amount={item.amount} name={item.name} image={item.image} key={uuid()} />
    ))
  );

  useEffect(() => {
    getOrderItem();
  }, []);

  return (
    <Styled.Layout>
      <PageHeader>주문 목록</PageHeader>
      {MyorderListHeaderItems.map((value, idx) => (
        <div key={uuid()}>
          {MyorderListHeaderItems[idx]}
          {MyorderListOrdredItems[idx]}
        </div>
      ))}
    </Styled.Layout>
  );
};

export default MyOrderListPage;
