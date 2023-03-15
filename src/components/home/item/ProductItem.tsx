import React from 'react';
import styled from '@emotion/styled';
import { ProductType } from '../../../api/product';
import SvgCart from '../../svg/SvgCart';

const S = {
  Wrapper: styled.div``,
  ImgWrap: styled.div`
    margin-bottom: 10px;
    cursor: pointer;
  `,
  TextWrap: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: start;
  `,
  ColumnLeft: styled.div`
    width: 100%;
  `,
  Name: styled.span`
    display: block;
    margin-bottom: 10px;
    font-size: 15px;
  `,
  Price: styled.strong`
    font-size: 20px;
  `,
  ColumnRight: styled.div`
    height: 23px;
    padding-left: 10px;
    cursor: pointer;
  `,
};

const ProductItem = ({ name, price, imageUrl }: ProductType) => {
  return (
    <S.Wrapper>
      <S.ImgWrap>
        <img src={imageUrl} alt={name} />
      </S.ImgWrap>
      <S.TextWrap>
        <S.ColumnLeft>
          <S.Name>{name}</S.Name>
          <S.Price>{price} 원</S.Price>
        </S.ColumnLeft>
        <S.ColumnRight>
          <SvgCart />
        </S.ColumnRight>
      </S.TextWrap>
    </S.Wrapper>
  );
};

export default ProductItem;
