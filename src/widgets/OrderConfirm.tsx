import { useParams } from 'react-router-dom';

import OrderDetails from 'src/entities/order/ui/confirm/OrderDetails';
import OrderConfirmHeader from 'src/entities/order/ui/confirm/OrderConfirmHeader';
import OrderConfirmPayment from 'src/entities/order/ui/confirm/OrderConfirmPayment';
import useGetOrderDetailQuery from 'src/entities/order/hooks/useGetOrderDetailQuery';

export default function OrderConfirm() {
	const { id } = useParams();

	const { data: order, isLoading } = useGetOrderDetailQuery({ id: Number(id) });

	if (isLoading) {
		return <div className="product-no-items">Loading...</div>;
	}

	if (order.isPaid) {
		return <div className="product-no-items">이미 결제가 완료된 주문입니다.</div>;
	}

	return (
		<section className="order-section">
			<OrderConfirmHeader />
			<div className="flex">
				<section className="order-left-section">
					<OrderDetails orderDetails={order.orderDetails} />
				</section>
				<section className="order-right-section">
					<OrderConfirmPayment {...order} />
				</section>
			</div>
		</section>
	);
}
