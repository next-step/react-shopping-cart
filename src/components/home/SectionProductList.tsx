import React, { useCallback, useEffect, useState } from 'react';
import { fetchProductList, ProductType } from '../../api/product';
import Section from '../common/Section';
import styled from '@emotion/styled';
import mq from '../../utils/style/mediaQuery';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../router';

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
  const [productList, setProductList] = useState<ProductType[] | null>(null);
  const navigate = useNavigate();

  const addToCart = () => {
    const confirmRes = confirm(
      '장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?'
    );
    if (confirmRes) navigate(ROUTE.CART);
  };

  const fetchProduct = async (): Promise<void> => {
    const list = await fetchProductList();
    if (list === null) return;
    setProductList(list);
  };

  const onClickProductItem = useCallback((id: number | undefined) => {
    navigate(`${ROUTE.DETAIL}/${id}`);
  }, []);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Section>
      <S.Container>
        {productList?.map((item) => (
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
