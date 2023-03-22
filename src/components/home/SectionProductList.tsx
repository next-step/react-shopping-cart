import React from 'react';
import Section from '../common/Section';
import styled from '@emotion/styled';
import mq from '../../utils/style/mediaQuery';
import ProductItem from './ProductItem';
import { ProductType } from '../../types';

const S = {
  Container: styled.div(
    mq({
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, minmax(0, 1fr))',
        'repeat(2, minmax(0, 1fr))',
        'repeat(4, minmax(0, 1fr))',
      ],
      gridColumnGap: ['0', '20px', '40px'],
      gridRowGap: ['20px', '20px', '30px'],
      margin: ['50px 0', '60px 0'],
    })
  ),
};

interface SectionProductListProps {
  products: ProductType[];
  navigateToDetailedPage: (num: number | undefined) => void;
}
const SectionProductList = ({
  products,
  navigateToDetailedPage,
}: SectionProductListProps) => {
  return (
    <Section>
      <S.Container>
        {products?.map((item) => (
          <ProductItem
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            onClickProductImage={() => navigateToDetailedPage(item.id)}
          />
        ))}
      </S.Container>
    </Section>
  );
};

export default SectionProductList;
