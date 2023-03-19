import React from 'react'
import { convertCurrencyFormet } from '../../utils/formatter'
import { ProductType } from '../Product/Product'
import { Button } from '../ui/Button'
import { BsFillTrashFill } from 'react-icons/bs'

export type CartItemType = ProductType

type CartItemProps = {
  cartItem: CartItemType
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <div className='flex py-2 border-b-2 border-solid border-gray-300 justify-between'>
      <div className='flex'>
        <img
          src={cartItem.imageUrl}
          alt={cartItem.name}
          width={150}
          className='h-[150px] mr-4'
        />
        <p className='text-xl pt-2'>{cartItem.name}</p>
      </div>
      <div className='text-right '>
        <Button
          color='secondary'
          variant='text'
          size='lg'
          onClick={() => console.log('trash')}
          iconArea={<BsFillTrashFill />}
          width='auto'
        />
        <div>숫자 셀렉터 들어갈 곳</div>
        <span>{convertCurrencyFormet(cartItem.price)}원</span>
      </div>
    </div>
  )
}

export default CartItem
