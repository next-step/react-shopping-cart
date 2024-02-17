import type { Product } from 'types/api';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { API } from 'constants/api';
import { Box } from 'components/@common';
import httpRequest from 'utils/http';
import { ProductItem, ProductItemSkeleton } from 'components/ProductItem';

const DEFAULT_ARRAY_LENGTH = 8;

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await httpRequest<Product[]>(API.PRODUCTS);
      setProducts(response);
    }

    fetchData();
  }, []);

  return (
    <Wrapper display="grid" gap={30}>
      {products.length === 0
        ? Array.from({ length: DEFAULT_ARRAY_LENGTH }).map((_, index) => (
            <ProductItemSkeleton key={index} />
          ))
        : products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
    </Wrapper>
  );
};

export default ProductListPage;

const Wrapper = styled(Box)`
  grid-template-columns: repeat(4, 1fr);
`;
