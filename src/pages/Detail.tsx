import { CartService, ProductService } from '../service';
import { useCallback, useEffect, useState } from 'react';
import { IProduct } from '../types/shoppingCart';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/organisms/product/ProductDetail';

export default function Detail() {
  const { findProductOne } = ProductService();
  const { addCart } = CartService();
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const fetchData = async () => {
    const item = await findProductOne(Number(id));

    setProduct(item);
  };

  const handleClickCart = useCallback(() => {
    if (!product) return;

    addCart(product);
  }, [product]);

  useEffect(() => {
    fetchData();
  }, []);

  if (!product) return;

  return (
    <ProductDetail product={product} onClickCart={handleClickCart}/>
  );
}
