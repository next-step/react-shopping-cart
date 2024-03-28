import useGetCartItemListQuery from 'src/entities/cart/hooks/useGetCartItemListQuery';

export default function CartItemListHeader() {
	const { data: cartList } = useGetCartItemListQuery();

	return (
		<>
			<h3 className="cart-title">든든배송 상품({cartList?.length}개)</h3>
			<hr className="divide-line-gray mt-10" />
		</>
	);
}
