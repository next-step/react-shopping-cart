import { MouseEvent } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import Divider from '@components/common/Divider/Divider';
import IconButton from '@components/common/Button/IconButton';
import Image from '@components/common/Image/Image';
import cartImg from '@/assets/svgs/cart.svg';
import { usePostCartProductMutation } from '@/hooks/mutations/usePostCartProductMutation';
import useCartStore from '@/store/cartStore';
import useAlertDialogStore from '@/store/alertDialogStore';
import { formatToKRW } from '@/utils/formatter';
import { checkProductExistInCart } from '@/utils/cart';
import { Product } from '@/types/product';

interface ProductItemProps extends Product {}

export default function ProductItem({
  id,
  name,
  imageUrl,
  price,
}: ProductItemProps) {
  const navigate = useNavigate({ from: '/list' });

  const openAlertDialog = useAlertDialogStore.use.onOpen();

  const cart = useCartStore.use.cart();

  const { mutate: postCartProduct } = usePostCartProductMutation();

  const handleClickProductItem = (productId: string) => {
    navigate({ to: '/list/$productId', params: { productId } });
  };

  const handleCartClick = (event: MouseEvent) => {
    event.stopPropagation();

    const isProductExistInCart = checkProductExistInCart(cart, id);

    const dialogConfig = isProductExistInCart
      ? {
          message:
            '이미 장바구니에 있는 상품입니다.\n장바구니로 이동하시겠습니까?',
          btnText: '확인',
          onConfirm: () => navigate({ to: '/cart' }),
        }
      : {
          message: '장바구니에 상품이 담겼습니다.',
          btnText: '바로가기',
          onConfirm: () => navigate({ to: '/cart' }),
        };

    postCartProduct(
      { product: { id, name, price, imageUrl } },
      {
        onSuccess: () =>
          openAlertDialog({
            title: '알림',
            ...dialogConfig,
          }),
      }
    );
  };

  return (
    <article
      className={productItemContainer}
      onClick={() => handleClickProductItem(String(id))}
    >
      <figure>
        <Image size='full' src={imageUrl} alt={name} />
        <figcaption className={productItemFigCaption}>{name}</figcaption>
      </figure>

      <Divider color='lightGray' />

      <div
        className={flex({
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 10px 6px',
        })}
      >
        <span>{formatToKRW(price)}</span>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='cart'
          onClick={handleCartClick}
          icon={<Image variant='icon' src={cartImg} alt='장바구니' />}
        />
      </div>
    </article>
  );
}

const productItemContainer = flex({
  width: '100%',
  flexDirection: 'column',
  alignItems: 'space-between',
  marginTop: '10px',
  outline: '1px solid #ddd',
  borderRadius: '4px',
  minWidth: '100px',
  minHeight: '200px',
});

const productItemFigCaption = css({
  width: '100%',
  height: '48px',
  textAlign: 'left',
  marginTop: '10px',
  paddingX: '6px',
  overflow: 'hidden',
});
