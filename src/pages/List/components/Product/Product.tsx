import { ProductType } from '@/types'

import { useProduct } from './hooks'

const Product = ({ id, src, name, price }: ProductType) => {
  const { handleCartButtonClick, goToProductDetail } = useProduct()

  return (
    <div key={id}>
      <img src={src} alt={name} onClick={() => goToProductDetail(id)} />
      <div className="flex justify-between w-280 p-5">
        <div role="button" className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString()}원</span>
        </div>
        <button onClick={() => handleCartButtonClick({ id, src, name, price })}>
          <img src="assets/svgs/cart.svg" alt="장바구니" />
        </button>
      </div>
    </div>
  )
}

export default Product
