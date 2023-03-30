import { Order } from '@/types'

interface OrderListItemProps {
  orderItem: Order
}

const OrderListItem = ({ orderItem }: OrderListItemProps) => {
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src="./assets/images/product.png" alt="PET보틀-정사각(420ml)" />
        <div className="flex-col gap-15">
          <span className="order-name">{orderItem.name}</span>
          <span className="order-info">
            {orderItem.price.toLocaleString()} 원 / 수량: {orderItem.quantity}개
          </span>
        </div>
      </div>
      <button className="primary-button-small flex-center self-start">장바구니</button>
    </div>
  )
}

export default OrderListItem
