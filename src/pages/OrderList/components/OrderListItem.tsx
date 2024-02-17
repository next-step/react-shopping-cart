import { useOrderListItem } from '@/pages/OrderList/hooks'
import { Order } from '@/types'

interface OrderListItemProps {
  orderItem: Order
}

const OrderListItem = ({ orderItem }: OrderListItemProps) => {
  const { openCheckCartNavigationModal } = useOrderListItem({ orderItem })
  return (
    <div className="order-list-item">
      <div className="flex gap-15">
        <img className="image-small" src={orderItem.imageUrl} alt={orderItem.name} />
        <div className="flex-col gap-15">
          <span className="order-name">{orderItem.name}</span>
          <span className="order-info">
            {orderItem.price.toLocaleString()} 원 / 수량: {orderItem.quantity}개
          </span>
        </div>
      </div>
      <button className="primary-button-small flex-center self-start" onClick={openCheckCartNavigationModal}>
        장바구니
      </button>
    </div>
  )
}

export default OrderListItem
