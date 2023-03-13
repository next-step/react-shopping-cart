import { ProductType } from '@/types'

const Product = ({ id, src, name, price }: ProductType) => {
  const addCart = () => {
    // 카트 추가 로직 필요
    alert('장바구니에 추가되었습니다!')
  }
  return (
    <div key={id}>
      <img src={src} alt={name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString()}원</span>
        </div>
        <button onClick={addCart}>
          <img src="assets/svgs/cart.svg" alt="장바구니" />
        </button>
      </div>
    </div>
  )
}

export default Product
