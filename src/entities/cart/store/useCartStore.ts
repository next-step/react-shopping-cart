import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { CartItemData, CartItemSelection } from 'src/entities/cart/type/cart.type';
import createSelectors from 'src/shared/lib/zustand';

interface CartState {
	cart: Record<CartItemData['id'], CartItemSelection>;
	increaseQuantity: (id: CartItemData['id']) => void;
	decreaseQuantity: (id: CartItemData['id']) => void;
	resetCart: () => void;
	setItemsToCart: (items: CartItemData[]) => void;
	toggleItemSelection: (id: CartItemData['id']) => void;
	selectAllItems: () => void;
	unselectAllItems: () => void;
}

const useCartBaseStore = create<CartState>()(
	immer(set => ({
		cart: {},
		increaseQuantity: id =>
			set(state => {
				state.cart[id].quantity += 1;
			}),
		decreaseQuantity: id =>
			set(state => {
				if (state.cart[id].quantity > 1) {
					state.cart[id].quantity -= 1;
				}
			}),
		resetCart: () => set({ cart: {} }),
		setItemsToCart: items =>
			set(state => {
				state.cart = items.reduce(
					(acc, item) => {
						if (state.cart[item.id]) {
							acc[item.id] = state.cart[item.id];
						} else {
							acc[item.id] = { ...item, quantity: 1, selected: false };
						}
						return acc;
					},
					{} as Record<CartItemData['id'], CartItemSelection>,
				);
			}),
		toggleItemSelection: id => {
			set(state => {
				state.cart[id].selected = !state.cart[id].selected;
			});
		},
		selectAllItems: () => {
			set(state => {
				for (const id in state.cart) {
					state.cart[id].selected = true;
				}
			});
		},
		unselectAllItems: () => {
			set(state => {
				for (const id in state.cart) {
					state.cart[id].selected = false;
				}
			});
		},
	})),
);

const useCartStore = createSelectors(useCartBaseStore);

export default useCartStore;
