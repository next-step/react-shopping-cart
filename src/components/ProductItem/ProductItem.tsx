import type { Key } from 'react';
import type { Product } from 'types/api';

import styled from '@emotion/styled';

import { Box, Button, Typography } from 'components/@common';
import { ReactComponent as CartIcon } from 'assets/CartIcon.svg';
import { theme } from 'styles/theme';
import { formatComma } from 'utils/format';

interface Props {
  key: Key;
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  const { name, price, imageUrl } = product;

  return (
    <div>
      <ProductImageWrapper>
        <img src={imageUrl} alt={name} />
        <ShoppingCartButton size="xs" variant="solid" color="white">
          <CartIcon width={25} height={25} fill={theme.color.cyan05} />
        </ShoppingCartButton>
      </ProductImageWrapper>

      <ContentWrapper
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <div>
          <Typography variant="body1" height="auto">
            {name}
          </Typography>
          <Typography variant="h4" className="mt-1">
            {`${formatComma(price)}원`}
          </Typography>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ProductItem;

const ProductImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;
const ShoppingCartButton = styled(Button)`
  position: absolute;
  bottom: 12px;
  right: 7px;
  border-radius: 50%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray00};
  box-shadow: rgba(0, 0, 0, 0.03) 0px 3px 6px, rgba(0, 0, 0, 0.05) 0px 3px 6px;
`;

const ContentWrapper = styled(Box)`
  padding: 5px;
  box-sizing: border-box;
  text-align: left;
`;
