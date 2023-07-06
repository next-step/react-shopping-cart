import { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import classnames from 'classnames';
import TagManager from 'react-gtm-module';

import { CartIcon } from '@/assets/svgs';

import { Box } from '@/components/common';

import { TOAST_MESSAGE } from '@/constants/toastMessage';

import { useCartContext } from '@/context/cart';
import { useToastContext } from '@/context/toast';

import { TProduct } from '@/types/product';

import { numberFormatter } from '@/utils/number';

type Props = TProduct;

const tagManagerArgs = {
  dataLayer: {
    event: 'Click add item in cart',
  },
};

TagManager.dataLayer(tagManagerArgs);
export default function Product({ id, name, price, imageUrl }: Props) {
  const { items, addItem } = useCartContext();
  const { showToast } = useToastContext();

  const hasItemInCarts = items.findIndex((item) => item.id === id) > -1;

  const handleClickAddItemToCart = useCallback(
    (item: TProduct) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      addItem(item);

      const toastMessage = hasItemInCarts ? TOAST_MESSAGE.CART.DELETED : TOAST_MESSAGE.CART.ADDED;
      showToast(toastMessage);

      TagManager.dataLayer(tagManagerArgs);
    },
    [addItem, showToast, hasItemInCarts],
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
              className={classnames({ deleteCart: hasItemInCarts })}
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
