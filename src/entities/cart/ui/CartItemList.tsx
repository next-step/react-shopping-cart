import { Fragment } from 'react';

import CartItem from 'src/entities/cart/ui/CartItem';
import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

export default function CartItemList() {
	const { data: cartItemList } = useGetCartItemListQuery();

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
