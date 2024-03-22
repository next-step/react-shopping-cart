import { useNavigate } from 'react-router-dom';

import { Order } from 'src/entities/order/types/order.type';
import OrderProduct from 'src/entities/order/ui/list/OrderProduct';

export default function OrderListItem({ id, orderDetails }: Order) {
	const navigate = useNavigate();

	const handleOrderDetailClick = () => {
		navigate(`/order/detail/${id}`);
	};

	return (
		<div className="order-list">
			<div className="order-list__header">
				<span>주문번호: {id}</span>
				<span onClick={handleOrderDetailClick}>{`상세보기 >`}</span>
			</div>
			{orderDetails.map(orderDetail => (
				<OrderProduct {...orderDetail} key={orderDetail.id} />
			))}
		</div>
	);
}
