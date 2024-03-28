import { Order } from 'src/entities/order/types/order.type';
import { formatPriceToKRW } from 'src/shared/lib/format';

export default function OrderDetailPrice({ orderDetails }: Order) {
	const totalPrice = orderDetails.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

	return (
		<div className="order-detail-container">
			<div className="w-480">
				<span className="order-detail-title">결제금액 정보</span>
				<hr className="divide-line-thin my-20" />
				<div className="flex justify-between">
					<span className="highlight-text">총 결제금액</span>
					<span className="highlight-text" data-testid="total-price">
						{formatPriceToKRW(totalPrice)}
					</span>
				</div>
			</div>
		</div>
	);
}
