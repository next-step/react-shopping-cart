import { useParams } from 'react-router-dom';

import OrderDetailItem from 'src/entities/order/ui/detail/OrderDetailItem';
import OrderDetailHeader from 'src/entities/order/ui/detail/OrderDetailHeader';
import OrderDetailPrice from 'src/entities/order/ui/detail/OrderDetailPrice';
import useGetOrderDetailQuery from 'src/entities/order/hooks/useGetOrderDetailQuery';

export default function OrderDetail() {
	const { id } = useParams();
	const { data: orderDetail, isLoading } = useGetOrderDetailQuery({ id: Number(id) });

	if (isLoading) {
		return (
			<div className="product-no-items" data-testid="order-detail-page">
				Loading...
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
