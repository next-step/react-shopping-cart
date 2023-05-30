import styled from '@emotion/styled';

import { Grid } from '@/components/common';

import productApi from '@/domain/product/apis/product';
import Product from '@/domain/product/components/Product';

import useFetch from '@/hooks/useFetch';

import { ProductsDto } from '@/types/product';

export default function ProductList() {
  const { data, isLoading } = useFetch<ProductsDto>(productApi.getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Not Found...</div>;
  }

  return (
    <ProductListGrid as="ul" gap="12px" display="grid">
      {data.products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ProductListGrid>
  );
}

const ProductListGrid = styled(Grid)`
  max-width: 1280px;
  margin: 32px auto 0;
  padding: 0 16px;

  @media screen and (min-width: 320px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
