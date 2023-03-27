import { SubHeader, AmountBox } from '@/components'
import { useOrder } from '@/pages/Order/hooks'

import { OrderItem } from './components'

const Order = () => {
  const { orderList, totalOrderPrice, totalOrderQuantity, openPaymentCheckModal } = useOrder()

  return (
    <section className="order-section">
      <SubHeader title="주문/결제" type="order" />
      <div className="grid grid-cols-5 gap-60">
        <section className="span-3 order-left-section">
          <h3 className="order-title">주문 상품(3건)</h3>
          <hr className="divide-line-thin mt-10" />
          {orderList && orderList.length > 0 ? (
            orderList?.map((item) => (
              <>
                <OrderItem key={item.id} item={item} />
                <hr className="divide-line-thin mt-10" />
              </>
            ))
          ) : (
            <div className="flex justify-center px-20">주문 비어있습니다.</div>
          )}
        </section>
        <section className="span-2">
          <AmountBox
            title="결제금액"
            price={`${totalOrderPrice?.toLocaleString()} 원`}
            disabled={false}
            onClick={openPaymentCheckModal}
            buttonText={`결제하기 (${totalOrderQuantity}개)`}
          />
        </section>
      </div>
    </section>
  )
}

export default Order
