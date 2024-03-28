import { ChangeEvent } from 'react';

import useCartStore from 'src/entities/cart/store/useCartStore';
import useDeleteCartItemListMutation from 'src/entities/cart/hooks/useDeleteCartItemListMutation';
import useAlertStore from 'src/shared/store/useAlertStore';

export default function CartItemSelectPanel() {
	const openAlert = useAlertStore.use.open();

	const { mutate: deleteCartItemList } = useDeleteCartItemListMutation();

	const selectAllItems = useCartStore.use.selectAllItems();
	const unselectAllItems = useCartStore.use.unselectAllItems();

	const isAllSelected = useCartStore(state => {
		const cartItems = Object.values(state.cart);

		return cartItems.length > 0 && cartItems.every(item => item.selected);
	});

	const selectedItemIds = useCartStore(state =>
		Object.values(state.cart)
			.filter(item => item.selected)
			.map(item => item.id),
	);

	const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.checked) {
			unselectAllItems();
		} else {
			selectAllItems();
		}
	};

	const handleDeleteCartItemList = () => {
		openAlert({
			title: '장바구니 상품 삭제',
			message: `${selectedItemIds.length}개의 상품을 장바구니에서 삭제하시겠습니까?`,
			confirm: () => deleteCartItemList({ ids: selectedItemIds }),
		});
	};

	return (
		<div className="flex justify-between items-center">
			<div className="checkbox-container">
				<input
					className="checkbox"
					name="select-all"
					type="checkbox"
					checked={isAllSelected}
					id="select-all"
					onChange={handleSelectAll}
					aria-label="select-all"
				/>
				<label className="checkbox-label" htmlFor="select-all">
					전체선택
				</label>
			</div>
			{selectedItemIds.length > 0 ? (
				<button
					className="delete-button"
					type="button"
					onClick={handleDeleteCartItemList}
					aria-label="delete-cart-item"
				>
					상품삭제
				</button>
			) : null}
		</div>
	);
}
