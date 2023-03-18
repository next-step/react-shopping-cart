import { ProductService } from '../service';
import { useEffect, useState } from 'react';
import ProductContainer from '../components/organisms/product/ProductContainer';
import { IProduct } from '../types/shoppingCart';
import { CardList } from '../components/template';

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
    <CardList>
      <ProductContainer products={products}/>
    </CardList>
  );
}
