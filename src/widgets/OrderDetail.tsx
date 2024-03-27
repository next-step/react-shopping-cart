import { useParams } from 'react-router-dom';

import OrderDetailItem from 'src/entities/order/ui/detail/OrderDetailItem';
import OrderDetailHeader from 'src/entities/order/ui/detail/OrderDetailHeader';
import OrderDetailPrice from 'src/entities/order/ui/detail/OrderDetailPrice';
import useGetOrderDetailQuery from 'src/entities/order/hooks/useGetOrderDetailQuery';

export default function OrderDetail() {
	const { id } = useParams();
	const { data: orderDetail, isLoading } = useGetOrderDetailQuery({ id: id || '' });

	if (isLoading) {
		return (
			<div className="product-no-items" data-testid="order-detail-page">
				Loading...
			</div>
		);
	}

	if (!orderDetail) {
		return (
			<div className="product-no-items" data-testid="order-detail-page">
				주문이 존재하지 않습니다.
			</div>
		);
	}

	return (
		<section className="order-section" data-testid="order-detail-page">
			<OrderDetailHeader />
			<OrderDetailItem {...orderDetail} />
			<OrderDetailPrice {...orderDetail} />
		</section>
	);
}
