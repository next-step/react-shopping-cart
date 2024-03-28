import { Fragment } from 'react';

import CartItem from 'src/entities/cart/ui/CartItem';
import { CartItemData } from 'src/entities/cart/type/cart.type';

export default function CartItemList({ cartItemList }: { cartItemList: CartItemData[] }) {
	return (
		<>
			{cartItemList.map((cartItem, index) => (
				<Fragment key={cartItem.id}>
					<CartItem {...cartItem} />
					{index !== cartItemList.length - 1 && <hr className="divide-line-thin mt-10" />}
				</Fragment>
			))}
		</>
	);
}
