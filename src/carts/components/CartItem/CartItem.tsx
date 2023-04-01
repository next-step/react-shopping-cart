import React from 'react'
import { ProductType } from 'products/components/Product/Product'
import { Button } from 'shared/components/ui/Button'
import { BsFillTrashFill } from 'react-icons/bs'
import { LANGUAGE } from 'shared/constants/lang'

export type CartItemProductType = Omit<ProductType, 'id'>
export interface CartItemType {
  id: number
  product: CartItemProductType
}

type CartItemProps = {
  cartItem: CartItemType
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, name, price } = cartItem.product
  return (
    <div className='flex py-2 border-b-2 border-solid border-gray-300 justify-between'>
      <div className='flex'>
        <img src={imageUrl} alt={name} width={150} className='h-[150px] mr-4' />
        <p className='text-xl pt-2'>{name}</p>
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
        <span>{price.toLocaleString(LANGUAGE.KOREA)}원</span>
      </div>
    </div>
  )
}

export default CartItem
