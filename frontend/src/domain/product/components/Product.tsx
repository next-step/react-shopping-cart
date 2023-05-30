import { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { CartIcon } from '@/assets/svgs';

import { Box } from '@/components/common';

import { useCartContext } from '@/context/cart';
import { useToastContext } from '@/context/toast';

import { TProduct } from '@/types/product';

import { numberFormatter } from '@/utils/number';

type Props = TProduct;

export default function Product({ id, name, price, imageUrl }: Props) {
  const { items, addItem } = useCartContext();
  const { showToast } = useToastContext();

  const handleClickAddItemToCart = useCallback(
    (item: TProduct) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      showToast('장바구니에 상품이 담겼습니다.');

      addItem(item);
    },
    [addItem, showToast],
  );

  const 카트에_제품이_존재하는가 = items.find((item) => item.id === id);

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
              className={classnames({ deleteCart: 카트에_제품이_존재하는가 })}
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
    max-height: 300px;
    //height: 250px;
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
