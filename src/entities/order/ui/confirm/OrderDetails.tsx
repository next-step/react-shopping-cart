import { Fragment } from 'react';

import { Order } from 'src/entities/order/types/order.type';
import OrderItemDetails from 'src/entities/order/ui/confirm/OrderItemDetails';

export default function OrderDetails({ orderDetails }: Pick<Order, 'orderDetails'>) {
	return (
		<>
			<h3 className="order-title" data-testid="number-of-products">
				주문 상품({orderDetails.length}건)
			</h3>
			<hr className="divide-line-gray mt-10" />
			{orderDetails.map((orderDetail, index) => (
				<Fragment key={orderDetail.id}>
					<OrderItemDetails {...orderDetail} />
					{index < orderDetails.length - 1 && <hr className="divide-line-thin mt-10" />}
				</Fragment>
			))}
		</>
	);
}
