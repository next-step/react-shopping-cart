import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { API } from 'constants/api';
import type { Product } from 'types/api';

import { Box, Typography } from 'components/@common';

import httpRequest from 'utils/http';
import { formatComma } from 'utils/format';

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
    <Wrapper display="grid" gap={40}>
      {data.map(({ id, name, price, imageUrl }) => (
        <ProductWrapper key={id}>
          <img src={imageUrl} alt={name} />
          <Typography variant="body1">{name}</Typography>
          <Typography variant="h4" className="mt-3">
            {`${formatComma(price)} 원`}
          </Typography>
        </ProductWrapper>
      ))}
    </Wrapper>
  );
};

export default ProductListPage;

const Wrapper = styled(Box)`
  grid-template-columns: repeat(4, 1fr);
`;
const ProductWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */

  img {
    width: 100%;
  }
`;
