import React from 'react'
import OrderProduct, { OrderProductType } from '../OrderProduct/OrderProduct'
import { Button } from '../ui/Button'

export interface OrderProductsType {
  id: string
  totalPrice: number
  totalQuantity: string
  orderItems: OrderProductType[]
}

type OrderProductsProps = {
  order: OrderProductsType
}

const OrderProducts: React.FC<OrderProductsProps> = ({ order }) => {
  const { orderItems } = order
  return (
    <li className='border-2 border-gray-300 border-solid mb-10'>
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
      {orderItems?.length && (
        <ul className='bg-white'>
          {orderItems.map((orderItem) => (
            <OrderProduct key={orderItem.id} orderItem={orderItem} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default OrderProducts
