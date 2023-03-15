import { CartIcon } from '@/assets/svgs';

import { ProductDto } from '@/product/types/product';
import { Box } from '@/components/common';
import styled from '@emotion/styled';

type ProductProps = ProductDto;

export default function Product({ id, name, price, imageUrl }: ProductProps) {
  return (
    <ProductBox>
      <img src={imageUrl} alt="" />
      <Box display="flex" justifyContent="space-between">
        <div>
          <div>{name}</div>
          <div>{price.toLocaleString()}원</div>
        </div>
        <div>
          <button type="button">
            <CartIcon />
          </button>
        </div>
      </Box>
    </ProductBox>
  );
}

const ProductBox = styled.li`
  width: 320px;
  height: 300px;

  img {
    width: 320px;
    height: 250px;
    object-fit: cover;
  }
`;
