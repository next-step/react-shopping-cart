interface ProductProps {
  product: {
    id: number
    src: string
    name: string
    price: number
  }
}

const Product = ({ product }: ProductProps) => {
  const addCart = () => {
    // 카트 추가 로직 필요
    alert('장바구니에 추가되었습니다!')
  }
  return (
    <div key={product.id}>
      <img src={product.src} alt={product.name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{product.price.toLocaleString()}원</span>
        </div>
        <button onClick={addCart}>
          <img src="assets/svgs/cart.svg" alt="장바구니" />
        </button>
      </div>
    </div>
  )
}

export default Product
