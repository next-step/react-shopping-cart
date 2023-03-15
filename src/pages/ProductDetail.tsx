import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductDetail, ProductType } from '../api/product';

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState<ProductType | null>(null);

  const fetchDetail = async () => {
    const detail = await fetchProductDetail(Number(id));
    if (detail === null) return;
    setProductData(detail);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <img
          className="w-480 h-480 mb-10"
          src={productData?.imageUrl}
          alt={productData?.name}
        />
        <div className="product-detail-info">
          <span className="product-detail-info__name">{productData?.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">
              {productData?.price.toLocaleString()}원
            </span>
          </div>
        </div>
        <button className="product-detail-button flex-center mt-20">
          장바구니
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
