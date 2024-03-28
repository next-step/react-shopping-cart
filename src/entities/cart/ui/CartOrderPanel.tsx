import { useNavigate } from 'react-router-dom';

import useCartStore from 'src/entities/cart/store/useCartStore';
import { formatPriceToKRW } from 'src/shared/lib/format';
import usePostOrderMutation from 'src/entities/order/hooks/usePostOrderMutation';
import useAlertStore from 'src/shared/store/useAlertStore';

export default function CartOrderPanel() {
	const openAlert = useAlertStore.use.open();

	const navigate = useNavigate();

	const { mutate: postOrder, isPending } = usePostOrderMutation({
		onSuccess: ({ id }) => {
			navigate(`/order/confirm/${id}`);
		},
	});

	const cartCount = useCartStore(state =>
		Object.values(state.cart).reduce((acc, item) => acc + (item.selected ? 1 : 0), 0),
	);

	const totalPrice = useCartStore(state =>
		Object.values(state.cart).reduce((acc, item) => acc + (item.selected ? item.product.price * item.quantity : 0), 0),
	);

	const selectedCartItems = useCartStore(state =>
		Object.values(state.cart)
			.filter(item => item.selected)
			.map(item => ({
				id: item.product.id,
				quantity: item.quantity,
				price: item.product.price,
				name: item.product.name,
				imageUrl: item.product.imageUrl,
			})),
	);

	const handleOrderButtonClick = () => {
		openAlert({
			title: '주문하기',
			message: '선택한 상품을 주문하시겠습니까?',
			confirm: () => postOrder({ orderDetails: selectedCartItems }),
		});
	};

	return (
		<>
			<div className="cart-right-section__top">
				<h3 className="cart-title">결제예상금액</h3>
			</div>
			<hr className="divide-line-thin" />
			<div className="cart-right-section__bottom">
				<div className="flex justify-between p-20 mt-20">
					<span className="highlight-text">결제예상금액</span>
					<span className="highlight-text" aria-label="total-price">
						{formatPriceToKRW(totalPrice)}
					</span>
				</div>
				<div className="flex-center mt-30 mx-10">
					<button
						className="primary-button flex-center"
						type="button"
						onClick={handleOrderButtonClick}
						aria-label="make-order"
						disabled={cartCount === 0 || isPending}
					>
						주문하기({cartCount}개)
					</button>
				</div>
			</div>
		</>
	);
}
