import { useProductDetail } from './hooks'

const Detail = () => {
  const { name, price, src, hasSelectedProduct } = useProductDetail()
  return (
    <div className="product-detail-container">
      {hasSelectedProduct ? (
        <div className="flex-col-center w-520">
          <img className="w-480 h-480 mb-10" src={src} alt={name} />
          <div className="product-detail-info">
            <span className="product-detail-info__name">{name}</span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">{`${price?.toLocaleString()}원`}</span>
            </div>
          </div>
          <button className="product-detail-button flex-center mt-20">장바구니</button>
        </div>
      ) : (
        <div>선택된 제품이 없습니다.</div>
      )}
    </div>
  )
}

export default Detail
