import type { Product as ProductResponse } from '../../../-product-item.api'

interface ProductProps extends ProductResponse {
  saveProduct: (id: number) => void
}
export const Product = (props: ProductProps) => {
  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <img className="w-480 h-480 mb-10" src={props.imageUrl} alt={props.name} />

        <div className="product-detail-info">
          <span className="product-detail-info__name">{props.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">{props.price?.toLocaleString()}원</span>
          </div>
        </div>

        <button
          onClick={() => props.saveProduct(props.id)}
          className="product-detail-button flex-center mt-20 pointer"
        >
          장바구니
        </button>
      </div>
    </div>
  )
}
