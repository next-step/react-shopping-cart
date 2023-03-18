import { ProductService } from '../service';
import { useEffect, useState } from 'react';
import { IProduct } from '../types/shoppingCart';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/organisms/product/ProductDetail';
import { CardDetail } from '../components/template';

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

  if (!product) return;

  return (
    <CardDetail>
      <ProductDetail product={product}/>
    </CardDetail>
  );
}
