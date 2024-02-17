import { MouseEventHandler, useEffect, useState } from 'react';
import { IProductTypes } from '../../@interface';
import { insertCarts } from '../../api/cart';
import { getProduct } from '../../api/product';
import useRoute from '../hooks/useRoute';

const ProductDetail = () => {
  const { currentPage } = useRoute();
  const [data, setData] = useState<IProductTypes>();
  useEffect(() => {
    const id = currentPage.split('/')[2];
    getProduct(id).then((res) => {
      setData(res);
    });
  }, []);

  const handleCartClick: MouseEventHandler = (evt) => {
    const { target } = evt;
    if (!(target instanceof HTMLElement)) return;
    if (!data || !data.id) return;
    insertCarts(data).then((res) => {
      alert(res.message);
    });
  };
  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <img className="w-480 h-480 mb-10" src={data?.imageUrl} alt={data?.name} />
        <div className="product-detail-info">
          <span className="product-detail-info__name">{data?.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">{data?.price}원</span>
          </div>
        </div>
        <button className="product-detail-button flex-center mt-20" onClick={handleCartClick}>
          장바구니
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
