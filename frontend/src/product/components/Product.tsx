import { MouseEvent, useCallback } from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { CartIcon } from '@/assets/svgs';
import { Box } from '@/components/common';
import { useCartContext } from '@/context/Cart';
import { TProduct } from '@/types/product';
import { Link } from 'react-router-dom';

type ProductProps = TProduct;

export default function Product({ id, name, price, imageUrl }: ProductProps) {
  const { carts, addCart } = useCartContext();

  const handleClickCart = useCallback(
    (product: TProduct) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      addCart(product);
    },
    [addCart],
  );

  const isProductExistInCart = carts.find((cart) => cart.id === id);

  return (
    <ProductBox>
      <Link to={`/product-detail/${id}`}>
        <img src={imageUrl} alt="" />

        <TextBox display="flex" justifyContent="space-between">
          <Text>
            <div>{name}</div>
            <div>{price.toLocaleString()}원</div>
          </Text>
          <SvgBox>
            <button
              className={classnames({ deleteCart: isProductExistInCart })}
              type="button"
              onClick={handleClickCart({ id, name, price, imageUrl })}
            >
              <CartIcon />
            </button>
          </SvgBox>
        </TextBox>
      </Link>
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

const TextBox = styled(Box)`
  margin-top: 16px;
`;

const Text = styled.div`
  div:nth-last-of-type(1) {
    margin-top: 6px;
  }
`;

const SvgBox = styled.div`
  button {
    z-index: 9999;
  }

  .deleteCart {
    svg {
      path {
        fill: red;
      }
    }
  }
`;
