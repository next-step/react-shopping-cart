import ProductService from '../service/ProductService';
import { useEffect, useState } from 'react';
import { IProduct } from '../types/shoppingCart';
import { useParams } from 'react-router-dom';
import { Button } from '../components/atomes';

export default function Detail() {
  const { findProductOne } = ProductService();
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const fetchData = async () => {
    const item = await findProductOne(Number(id));

    setProduct(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <img
          alt={product?.name}
          className="w-480 h-480 mb-10"
          src={product?.imageUrl}
        />
        <div className="product-detail-info mb-10">
          <span className="product-detail-info__name">{product?.name}</span>
          <hr className="divide-line-gray my-20"/>
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">{product?.price}</span>
          </div>
        </div>
        <Button text="장바구니" color="gray"/>
      </div>
    </div>
  );
}
