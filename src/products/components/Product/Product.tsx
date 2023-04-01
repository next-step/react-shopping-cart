import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { Button } from 'shared/components/ui/Button'
import { LANGUAGE } from 'shared/constants/lang'

export interface ProductType {
  id: number
  price: number
  name: string
  imageUrl: string
}

type ProductProps = {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const onAddCartItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // cart에 추가하기
    // modal open
  }
  return (
    <Link to={`/product/${product.id}`}>
      <div className='w-full h-64'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='w-full h-full'
        />
      </div>

      <div className='flex justify-between items-center'>
        <div>
          <p className='mt-2 text-xl font-semibold'>{product.name}</p>
          <p className='text-gray-800 text-lg'>
            {product.price.toLocaleString(LANGUAGE.KOREA)}원
          </p>
        </div>

        <Button
          color='secondary'
          variant='text'
          iconArea={<FaShoppingCart className='text-gray-500' />}
          width='auto'
          size='lg'
          onClick={onAddCartItem}
        />
      </div>
    </Link>
  )
}

export default Product
