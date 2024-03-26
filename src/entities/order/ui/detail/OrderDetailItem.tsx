import { Order } from 'src/entities/order/types/order.type';
import OrderDetailItemProduct from 'src/entities/order/ui/detail/OrderDetailItemProduct';

export default function OrderDetailItem({ id, orderDetails }: Order) {
	return (
		<div className="order-list">
			<div className="order-list__header">
				<span>주문번호: {id}</span>
			</div>
			{orderDetails.map(orderDetail => (
				<OrderDetailItemProduct {...orderDetail} key={orderDetail.id} />
			))}
		</div>
	);
}
