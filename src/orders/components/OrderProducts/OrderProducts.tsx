import React from 'react'
import OrderProduct, { OrderProductType } from '../OrderProduct/OrderProduct'
import { Button } from '../../../shared/components/ui/Button'

export interface OrderProductsType {
  id: string
  orderDetails: OrderProductType[]
}

type OrderProductsProps = {
  order: OrderProductsType
}

const OrderProducts: React.FC<OrderProductsProps> = ({ order }) => {
  const { orderDetails } = order
  return (
    <>
      <div className='border-b-2 border-gray-300 border-solid py-4 px-2 flex justify-between bg-neutral-100 items-center'>
        <p>주문번호</p>
        <Button
          color='secondary'
          variant='text'
          size='sm'
          onClick={() => console.log(1)}
          width='auto'
          textArea='상세보기 >'
        />
      </div>
      {orderDetails?.length && (
        <ul className='bg-white'>
          {orderDetails.map((orderItem) => (
            <OrderProduct key={orderItem.id} orderItem={orderItem} />
          ))}
        </ul>
      )}
    </>
  )
}

export default OrderProducts
