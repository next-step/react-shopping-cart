import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { API } from 'constants/api';
import type { Product } from 'types/api';

import { Box, Button, Typography } from 'components/@common';

import httpRequest from 'utils/http';
import { formatComma } from 'utils/format';

import { ReactComponent as CartIcon } from 'assets/CartIcon.svg';
import { theme } from 'styles/theme';

const ProductListPage = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await httpRequest<Product[]>(API.PRODUCTS);
      setData(response);
    }

    fetchData();
  }, []);

  return (
    <Wrapper display="grid" gap={30}>
      {data.map(({ id, name, price, imageUrl }) => (
        <div key={id}>
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
      ))}
    </Wrapper>
  );
};

export default ProductListPage;

const Wrapper = styled(Box)`
  grid-template-columns: repeat(4, 1fr);
`;

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
