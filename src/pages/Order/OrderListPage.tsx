import useOrderStore from '@/store/orderStore';
import OrderTitle from '@components/Order/@common/OrderTitle';
import OrderList from '@components/Order/List/OrderList';

export default function OrderListPage() {
  // TODO: 서버 데이터
  // const { orders } = useGetOrdersQuery();
  const orders = useOrderStore.use.order();

  return (
    <section>
      <OrderTitle title='주문 목록' />

      <OrderList orders={orders} />
    </section>
  );
}
