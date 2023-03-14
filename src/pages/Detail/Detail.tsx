import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '@/config'
import { ProductType } from '@/types'

const Detail = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState<ProductType>()

  useEffect(() => {
    fetch(API.PRODUCT(Number(id)))
      .then((response) => response.json())
      .then((data) => setProductDetail(data))
  }, [id])

  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <img className="w-480 h-480 mb-10" src={productDetail?.src} alt={productDetail?.name} />
        <div className="product-detail-info">
          <span className="product-detail-info__name">{productDetail?.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">{`${productDetail?.price.toLocaleString()}원`}</span>
          </div>
        </div>
        <button className="product-detail-button flex-center mt-20">장바구니</button>
      </div>
    </div>
  )
}

export default Detail
