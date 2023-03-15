import ProductService from '../service/ProductService';
import { useEffect, useState } from 'react';
import ProductContainer from '../components/organisms/product/ProductContainer';
import { IProduct } from '../types/shoppingCart';

export default function List() {
  const { findAllProducts } = ProductService();
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchData = async () => {
    const products = await findAllProducts();
    setProducts(products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProductContainer products={products}/>
  );
}
