import { useNavigate } from 'react-router-dom';

import { Order } from 'src/entities/order/types/order.type';
import { formatPriceToKRW } from 'src/shared/lib/format';
import usePutOrderIsPaidMutation from 'src/entities/order/hooks/usePutOrderIsPaidMutation';
import useAlertStore from 'src/shared/store/useAlertStore';

export default function OrderConfirmPayment({ orderDetails, id }: Order) {
	const openAlert = useAlertStore.use.open();

	const navigate = useNavigate();

	const { mutate: putOrderIsPaid, isPending } = usePutOrderIsPaidMutation({
		onSuccess: () => {
			navigate('/order/list');
		},
	});

	const totalPrice = orderDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const handlePaymentButtonClick = () => {
		openAlert({
			title: '결제하기',
			message: '주문하신 상품을 결제하시겠습니까?',
			confirm: () => putOrderIsPaid({ id }),
		});
	};

	return (
		<>
			<div className="order-right-section__top">
				<h3 className="order-title">결제금액</h3>
			</div>
			<hr className="divide-line-thin" />
			<div className="order-right-section__bottom">
				<div className="flex justify-between p-20 mt-20">
					<span className="highlight-text">총 결제금액</span>
					<span className="highlight-text" data-testid="total-price-payment">
						{formatPriceToKRW(totalPrice)}
					</span>
				</div>
				<div className="flex-center mt-30 mx-10">
					<button
						className="primary-button flex-center"
						type="button"
						onClick={handlePaymentButtonClick}
						aria-label="confirm-payment"
						disabled={isPending}
					>
						{formatPriceToKRW(totalPrice)} 결제하기
					</button>
				</div>
			</div>
		</>
	);
}
