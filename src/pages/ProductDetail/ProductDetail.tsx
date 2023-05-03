import { useProductDetail } from './hooks'

const ProductDetail = () => {
  const { productDetail, handleCartButtonClick } = useProductDetail()
  return (
    <div className="product-detail-container">
      {productDetail ? (
        <div className="flex-col-center w-520">
          <img className="product-detail-image mb-10" src={productDetail.imageUrl} alt={productDetail.name} />
          <div className="product-detail-info">
            <span className="product-detail-info__name">{productDetail.name}</span>
            <hr className="divide-line-gray my-10" />
            <div className="flex justify-between">
              <span className="product-detail-info__price">금액</span>
              <span className="product-detail-info__price">{`${productDetail.price.toLocaleString()}원`}</span>
            </div>
          </div>
          <button
            onClick={() => handleCartButtonClick({ ...productDetail })}
            className="product-detail-button flex-center mt-20"
          >
            장바구니
          </button>
        </div>
      ) : (
        <div>선택된 제품이 없습니다.</div>
      )}
    </div>
  )
}

export default ProductDetail
