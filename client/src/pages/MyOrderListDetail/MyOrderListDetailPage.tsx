import * as Styled from './MyOrderListDetailPage.styles';
import { PageHeader } from 'common/components';
import { MyOrderListHeader, MyOrderListItem, Payment } from 'common/components/Domain';
import { useAppSelector } from 'store';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';

const MyOrderListDetailPage = () => {
  const orderedList = useAppSelector((state) => state.order.orderedList);
  const { id } = useParams();

  const MyorderedListItem = orderedList.filter((item) => item.id === Number(id))[0].ordered;
  const MyorderListTotalPrice = MyorderedListItem.totalPrice;
  const MyorderListSelectedHeader = <MyOrderListHeader id={Number(id)} />;
  const MyorderListSelectedItems = MyorderedListItem.item.map((item) => (
    <MyOrderListItem
      id={item.id}
      price={item.price}
      amount={item.amount}
      name={item.name}
      image={item.image}
      key={uuid()}
    />
  ));

  return (
    <Styled.Layout>
      <PageHeader>주문내역 상세</PageHeader>
      <div>
        {MyorderListSelectedHeader}
        {MyorderListSelectedItems}
      </div>

      <Styled.Container>
        <Styled.Box>
          <Payment type="orderDetail" title="결제 금액 정보" price={MyorderListTotalPrice} />
        </Styled.Box>
      </Styled.Container>
    </Styled.Layout>
  );
};
export default MyOrderListDetailPage;
