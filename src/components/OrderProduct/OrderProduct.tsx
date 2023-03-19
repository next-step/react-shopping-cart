import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductApi } from '../../context/productApiContext'
import { convertCurrencyFormet } from '../../utils/formatter'
import { NAVIGATE_URL } from '../../utils/routers'
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
  const { cartHttpClient } = useProductApi()
  const onClickCartBtn = async (product: ProductType) => {
    await cartHttpClient?.addCart(product)
    navigate(NAVIGATE_URL.CARTS)
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
        onClick={() => onClickCartBtn(orderItem)}
        size='md'
        textArea='장바구니'
        variant='fill'
      />
    </li>
  )
}

export default OrderProduct
