import OrderListItem from 'src/entities/order/ui/list/OrderListItem';
import OrderListHeader from 'src/entities/order/ui/list/OrderListHeader';
import useGetOrderListQuery from 'src/entities/order/hooks/useGetOrderListQuery';

export default function OrderList() {
	const { data: orderList, isLoading } = useGetOrderListQuery();

	if (isLoading) {
		return <div className="product-no-items">Loading...</div>;
	}

	if (orderList.length === 0) {
		return <div className="product-no-items">주문이 없습니다.</div>;
	}

	return (
		<section className="order-section">
			<OrderListHeader />
			{orderList.map(order => (
				<OrderListItem {...order} key={order.id} />
			))}
		</section>
	);
}
