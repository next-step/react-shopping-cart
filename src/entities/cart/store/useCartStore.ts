import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { CartItem, CartItemSelection } from 'src/entities/cart/type/cart.type';
import createSelectors from 'src/shared/lib/zustand';

interface CartState {
	cart: Record<CartItem['id'], CartItemSelection>;
	increaseQuantity: (id: CartItem['id']) => void;
	decreaseQuantity: (id: CartItem['id']) => void;
	resetCart: () => void;
	setItemsToCart: (items: CartItem[]) => void;
	toggleItemSelection: (id: CartItem['id']) => void;
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
					{} as Record<CartItem['id'], CartItemSelection>,
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
