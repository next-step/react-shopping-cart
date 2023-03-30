import { OrderListItem } from '@/pages/OrderList/components'
import { Order } from '@/types'
interface OrderListItemContainerProps {
  title: string
  orders: Order[]
}

const OrderListItemContainer = ({ title, orders }: OrderListItemContainerProps) => {
  return (
    <>
      <div className="order-list__header">
        <span>{title}</span>
        {/* Todo: 상세보기 클릭 시 구현 */}
        {/* <span>상세보기 &#62;</span> */}
      </div>
      {orders.map((orderItem) => (
        <OrderListItem key={orderItem.id} orderItem={orderItem} />
      ))}
    </>
  )
}

export default OrderListItemContainer
