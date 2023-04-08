import * as Styled from './MyOrderListPage.styles';
import { PageHeader } from 'common/components';
import { MyOrderListItem, MyOrderListHeader } from 'common/components/Domain';
import { useOrder } from 'common/hooks';
import { useEffect } from 'react';
import { useAppSelector } from 'store';

import uuid from 'react-uuid';

const MyOrderListPage = () => {
  const { getOrderItem } = useOrder();

  const orderedList = useAppSelector((state) => state.order.orderedList);
  const MyorderListHeaderItems = orderedList.map((item) => <MyOrderListHeader id={item.id} key={uuid()} />);
  const MyorderListOrdredItems = orderedList.map((orderListProducts) =>
    orderListProducts.ordered.items.map((item) => (
      <MyOrderListItem
        id={item.id}
        price={item.price}
        amount={item.amount}
        name={item.name}
        image={item.image}
        key={uuid()}
      />
    ))
  );

  useEffect(() => {
    getOrderItem();
  }, []);

  return (
    <Styled.Layout>
      <PageHeader>주문 목록</PageHeader>
      {MyorderListHeaderItems.map((value, idx) => (
        <Styled.ItemBox key={uuid()}>
          {MyorderListHeaderItems[idx]}
          {MyorderListOrdredItems[idx]}
        </Styled.ItemBox>
      ))}
    </Styled.Layout>
  );
};

export default MyOrderListPage;
