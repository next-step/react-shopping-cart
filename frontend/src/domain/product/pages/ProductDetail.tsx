import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { Box } from '@/components/common';

import { ROUTES } from '@/constants/routes';

import { useCartContext } from '@/context/cart';

import useProduct from '@/domain/product/hooks/useProduct';

import { TProduct } from '@/types/product';

import { numberFormatter } from '@/utils/number';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const { addItem } = useCartContext();

  const { data: product, isLoading, error } = useProduct(Number(id));

  const handleClickCart = useCallback(
    (product: TProduct) => () => {
      addItem(product);

      navigate(ROUTES.CART);
    },
    [addItem, navigate],
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  if (!product) {
    return <div>Not Found...</div>;
  }

  return (
    <Container display="flex">
      <LeftImage>
        <img src={product.imageUrl} />
      </LeftImage>
      <RightText display="flex" flexDirection="column" justifyContent="space-between">
        <div>
          <h2>{product.name}</h2>
          <HorizontalLine />
        </div>
        <div>
          <PriceBox display="flex" justifyContent="space-between">
            <div>금액</div>
            <div>{numberFormatter(product.price)}원</div>
          </PriceBox>
          <CartBox display="flex" justifyContent="center">
            <button type="button" onClick={handleClickCart(product)}>
              장바구니
            </button>
          </CartBox>
        </div>
      </RightText>
    </Container>
  );
}

const Container = styled(Box)`
  max-width: 1280px;
  gap: 24px;
  margin: 32px auto 0;
`;

const LeftImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const RightText = styled(Box)`
  flex: 1;

  h2 {
    font-size: 28px;
  }
`;

const HorizontalLine = styled.div`
  border-bottom: 2px solid black;
  margin-top: 12px;
  width: 100%;
`;

const PriceBox = styled(Box)`
  font-size: 24px;
`;

const CartBox = styled(Box)`
  width: 100%;
  background-color: black;
  margin-top: 32px;
  height: 64px;

  button {
    color: white;
    font-size: 24px;
  }
`;
