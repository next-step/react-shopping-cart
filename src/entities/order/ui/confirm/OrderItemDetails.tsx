import { OrderDetail } from 'src/entities/order/types/order.type';

export default function OrderItemDetails({ quantity, name, imageUrl }: OrderDetail) {
	return (
		<div className="order-container">
			<div className="flex gap-15 mt-10">
				<img className="w-144 h-144" src={imageUrl} alt={name} />
				<div className="flex-col gap-15">
					<span className="order-name">{name}</span>
					<span>수량: {quantity}</span>
				</div>
			</div>
		</div>
	);
}
