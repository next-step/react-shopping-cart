import { useEffect, useState } from 'react';

import { Grid } from '@/components/common';

import productApi from '@/product/apis/product';
import { ProductDto } from '@/product/types/product';
import Product from '@/product/components/Product';
import styled from '@emotion/styled';

export default function ProductList() {
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productApi.getProducts();
      setProducts(res.products);
    };
    fetchProducts();
  }, []);

  return (
    <ProductListGrid as="ul" display="grid" gap="32px" gridTemplateColumns="1fr 1fr 1fr 1fr">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ProductListGrid>
  );
}

const ProductListGrid = styled(Grid)`
  max-width: 1280px;
  margin: 0 auto;
`;
