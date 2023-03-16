import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Grid } from '@/components/common';
import { TProduct } from '@/types/product';

import productApi from '@/product/apis/product';
import Product from '@/product/components/Product';

export default function ProductList() {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productApi.getProducts();
      setProducts(res.products);
    };
    fetchProducts();
  }, []);

  return (
    <ProductListGrid as="ul" display="grid" gap="24px" gridTemplateColumns="1fr 1fr 1fr 1fr">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ProductListGrid>
  );
}

const ProductListGrid = styled(Grid)`
  max-width: 1392px;
  margin: 32px auto 0;
`;
