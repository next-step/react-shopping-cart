import { ReactComponent as Card } from '@/assets/cart.svg'
import { Product as ProductProps } from '@/types'

import { useProduct } from './hooks'

const Product = ({ product }: { product: ProductProps }) => {
  const { id, imageUrl, name, price } = product
  const { handleCartButtonClick, goToProductDetail } = useProduct()

  return (
    <div>
      <img src={imageUrl} alt={name} onClick={() => goToProductDetail(id)} />
      <div className="flex justify-between">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString()}원</span>
        </div>
        <button onClick={() => handleCartButtonClick({ id, imageUrl, name, price })}>
          <Card />
        </button>
      </div>
    </div>
  )
}

export default Product
