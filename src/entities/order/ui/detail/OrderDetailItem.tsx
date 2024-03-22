import { Order } from 'src/entities/order/types/order.type';
import OrderListItemProduct from 'src/entities/order/ui/list/OrderListItemProduct';

export default function OrderDetailItem({ id, orderDetails }: Order) {
	return (
		<div className="order-list">
			<div className="order-list__header">
				<span>주문번호: {id}</span>
			</div>
			{orderDetails.map(orderDetail => (
				<OrderListItemProduct {...orderDetail} key={orderDetail.id} />
			))}
		</div>
	);
}
