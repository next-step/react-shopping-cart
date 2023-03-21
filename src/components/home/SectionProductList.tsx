import React from 'react';
import Section from '../common/Section';
import styled from '@emotion/styled';
import mq from '../../utils/style/mediaQuery';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../router';
import useProduct from '../../hooks/useProduct';

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
const SectionProductList = () => {
  const navigate = useNavigate();
  const { products, onClickProductItem } = useProduct();

  const addToCart = () => {
    const confirmRes = confirm(
      '장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?'
    );
    if (confirmRes) navigate(ROUTE.CART);
  };

  return (
    <Section>
      <S.Container>
        {products?.map((item) => (
          <ProductItem
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            onClickProductImage={() => onClickProductItem(item.id)}
            onClickAddCart={addToCart}
          />
        ))}
      </S.Container>
    </Section>
  );
};

export default SectionProductList;
