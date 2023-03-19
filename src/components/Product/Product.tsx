import React from 'react'
import { Link } from 'react-router-dom'
import { convertCurrencyFormet } from '../../utils/formatter'
import { Button } from '../ui/Button'
import { FaShoppingCart } from 'react-icons/fa'

export interface ProductType {
  id: string
  price: number
  name: string
  imageUrl: string
}

type ProductProps = {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const onAddCartItem = () => {
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
            {convertCurrencyFormet(product.price)}원
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
