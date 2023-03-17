import ProductService from '../service/ProductService';
import { useEffect, useState } from 'react';
import { IProduct } from '../types/shoppingCart';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/organisms/product/ProductDetail';

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
    <ProductDetail product={product}/>
  );
}
