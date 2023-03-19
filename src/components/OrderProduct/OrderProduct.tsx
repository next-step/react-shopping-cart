import React from 'react'
import { useNavigate } from 'react-router-dom'
import { convertCurrencyFormet } from '../../utils/formatter'
import { ProductType } from '../Product/Product'
import { Button } from '../ui/Button'

export interface OrderProductType extends ProductType {
  quantity: number
}

type OrderProductProps = {
  orderItem: OrderProductType
}

const OrderProduct: React.FC<OrderProductProps> = ({ orderItem }) => {
  const navigate = useNavigate()
  const onClickCartBtn = (productId: string) => {
    navigate(`/product/${productId}`)
  }
  return (
    <li className='flex border-b-2 border-gray-200 border-solid justify-between p-4'>
      <div className='flex'>
        <img
          src={orderItem.imageUrl}
          alt={orderItem.name}
          width={150}
          height={150}
          className='h-[150px] mr-4'
        />
        <div className='pt-4'>
          <p className='text-lg pb-3'>{orderItem.name}</p>
          <span className='text-gray-400'>
            {convertCurrencyFormet(orderItem.price * 3)}원 / 수량{' '}
            {orderItem.quantity}개
          </span>
        </div>
      </div>
      <Button
        color='primary'
        onClick={() => onClickCartBtn(orderItem.id)}
        size='md'
        textArea='장바구니'
        variant='fill'
      />
    </li>
  )
}

export default OrderProduct
