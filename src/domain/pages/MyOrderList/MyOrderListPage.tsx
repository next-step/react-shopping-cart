import uuid from 'react-uuid';
import * as Styled from './MyOrderListPage.styles';
import { ErrorMessage, PageHeader, Spinner } from 'common/components';
import { MyOrderListItem, MyOrderListHeader } from 'domain/components';
import useMyOrderListPage from '../hooks/useMyOrderListPage';

const MyOrderListPage = () => {
  const { orderedList, status, errorMessage } = useMyOrderListPage();

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

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

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
