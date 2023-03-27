import { Section, ProductItem } from '../index';
import styled from '@emotion/styled';
import { mediaQuery } from '../../utils';
import { ProductInfoType } from '../../types';

const S = {
  Container: styled.div(
    mediaQuery({
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, minmax(0, 1fr))',
        'repeat(2, minmax(0, 1fr))',
        'repeat(4, minmax(0, 1fr))',
      ],
      columnGap: ['0', '20px', '40px'],
      rowGap: ['20px', '20px', '30px'],
      margin: ['50px 0', '60px 0'],
    })
  ),
};

interface SectionProductListProps {
  products: ProductInfoType[];
  navigateToDetailedPage: (num?: number) => void;
  addCart: (item: ProductInfoType) => void;
}

const SectionProductList = ({
  products,
  navigateToDetailedPage,
  addCart,
}: SectionProductListProps) => {
  return (
    <Section>
      <S.Container>
        {products?.map((item) => (
          <ProductItem
            key={item.id}
            {...item}
            onClickProductImage={() => navigateToDetailedPage(item.id)}
            onClickAddCart={() => addCart(item)}
          />
        ))}
      </S.Container>
    </Section>
  );
};

export default SectionProductList;
