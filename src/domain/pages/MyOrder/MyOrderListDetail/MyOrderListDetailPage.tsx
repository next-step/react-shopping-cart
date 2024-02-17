import * as Styled from './MyOrderListDetailPage.styles';
import { ErrorMessage, PageHeader, Spinner } from 'common/components';
import { MyOrderListHeader, MyOrderListItem, Payment } from 'domain/components';
import uuid from 'react-uuid';
import useMyOrderListPage from '../../hooks/useMyOrderListPage';
import { useParams } from 'react-router-dom';

const MyOrderListDetailPage = () => {
  const { status, errorMessage, orderedList } = useMyOrderListPage();
  const { id } = useParams();
  const MyorderedListItem = orderedList.filter((item) => item.id === Number(id))[0].ordered;

  const MyorderListTotalPrice = MyorderedListItem.totalPrice;
  const MyorderListSelectedHeader = <MyOrderListHeader id={Number(id)} />;
  const MyorderListSelectedItems = MyorderedListItem.items.map((orderListProduct) => (
    <MyOrderListItem
      id={orderListProduct.id}
      price={orderListProduct.price}
      amount={orderListProduct.amount}
      name={orderListProduct.name}
      image={orderListProduct.image}
      key={uuid()}
    />
  ));

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <Styled.Layout>
      <PageHeader>주문내역 상세</PageHeader>
      <div>
        {MyorderListSelectedHeader}
        {MyorderListSelectedItems}
        <Styled.Container>
          <Styled.Box>
            <Payment type="orderDetail" title="결제 금액 정보" price={MyorderListTotalPrice} />
          </Styled.Box>
        </Styled.Container>
      </div>
    </Styled.Layout>
  );
};
export default MyOrderListDetailPage;
