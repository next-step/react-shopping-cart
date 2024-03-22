import { ChangeEvent } from 'react';

import useCartStore from 'src/entities/cart/store/useCartStore';
import useDeleteCartItemListMutation from 'src/entities/cart/hooks/useDeleteCartItemListMutation';

export default function CartItemSelectPanel() {
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
		deleteCartItemList({ ids: selectedItemIds });
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
				/>
				<label className="checkbox-label" htmlFor="select-all">
					전체선택
				</label>
			</div>
			<button className="delete-button" type="button" onClick={handleDeleteCartItemList}>
				상품삭제
			</button>
		</div>
	);
}
