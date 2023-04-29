import React, { useEffect, useState } from 'react';
import { ProductItem } from '../../components/ProductItem';
import { IProduct, IProductResponse } from '../../domain/shopping-cart/types';

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch('/api/products');
      const json = (await response.json()) as IProductResponse;

      setProducts(json.products);
    };

    loadProducts();
  }, []);

  return (
    <section className="product-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
