import styled from '@emotion/styled';
import { ProductDataType } from '../../../types';
import { SvgCart } from '../../../assets/svg';
import { priceFormat } from '../../../utils';

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
    height: 40px;
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

const ProductItem = ({
  name,
  price,
  imageUrl,
  onClickProductImage,
  onClickAddCart,
}: ProductDataType) => {
  return (
    <S.Wrapper>
      <S.ImgWrap onClick={onClickProductImage}>
        <img src={imageUrl} alt={name} />
      </S.ImgWrap>
      <S.TextWrap>
        <S.ColumnLeft>
          <S.Name>{name}</S.Name>
          <S.Price>{priceFormat(price)}</S.Price>
        </S.ColumnLeft>
        <S.ColumnRight onClick={onClickAddCart}>
          <SvgCart />
        </S.ColumnRight>
      </S.TextWrap>
    </S.Wrapper>
  );
};

export default ProductItem;
