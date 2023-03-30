import { SubHeader } from '@/components'
import { OrderListItemContainer } from '@/pages/OrderList/components'

import { useOrderList } from './hooks'

const OrderList = () => {
  const { orderList } = useOrderList()

  return (
    <>
      <section className="order-section">
        <SubHeader title="주문 목록" type="order" />
        <div className="order-list">
          {orderList?.map((order) => (
            <OrderListItemContainer
              key={order.orderListId}
              title={`주문번호: ${order.orderListId}`}
              orders={order.orders}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default OrderList
