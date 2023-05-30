import { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { CartIcon } from '@/assets/svgs';

import { Box } from '@/components/common';

import { TOAST_MESSAGE } from '@/constants/toastMessage';

import { useCartContext } from '@/context/cart';
import { useToastContext } from '@/context/toast';

import { TProduct } from '@/types/product';

import { numberFormatter } from '@/utils/number';

type Props = TProduct;

export default function Product({ id, name, price, imageUrl }: Props) {
  const { items, addItem } = useCartContext();
  const { showToast } = useToastContext();

  const 장바구니에_상품이_존재하는가 = items.find((item) => item.id === id);

  const handleClickAddItemToCart = useCallback(
    (item: TProduct) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      addItem(item);

      const toastMessage = 장바구니에_상품이_존재하는가 ? TOAST_MESSAGE.CART.DELETED : TOAST_MESSAGE.CART.ADDED;
      showToast(toastMessage);
    },
    [addItem, showToast, 장바구니에_상품이_존재하는가],
  );

  return (
    <BoxList>
      <Link to={`/product-detail/${id}`}>
        <img src={imageUrl} alt="product image" />
        <TextBox display="flex" justifyContent="space-between">
          <Text>
            <div>{name}</div>
            <div>{numberFormatter(price)}원</div>
          </Text>
          <SvgBox>
            <button
              type="button"
              className={classnames({ deleteCart: 장바구니에_상품이_존재하는가 })}
              onClick={handleClickAddItemToCart({ id, name, price, imageUrl })}
            >
              <CartIcon />
            </button>
          </SvgBox>
        </TextBox>
      </Link>
    </BoxList>
  );
}

const BoxList = styled.li`
  img {
    width: 100%;
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
