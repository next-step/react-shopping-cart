import { Product as ProductProps } from '@/types'

import { useProduct } from './hooks'

const Product = ({ product }: { product: ProductProps }) => {
  const { id, imageUrl, name, price } = product
  const { handleCartButtonClick, goToProductDetail } = useProduct()

  return (
    <div key={id}>
      <img src={imageUrl} alt={name} onClick={() => goToProductDetail(id)} />
      <div className="flex justify-between w-280 p-5">
        <div role="button" className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString()}원</span>
        </div>
        <button onClick={() => handleCartButtonClick({ id, imageUrl, name, price })}>
          <img src="assets/svgs/cart.svg" alt="장바구니" />
        </button>
      </div>
    </div>
  )
}

export default Product
