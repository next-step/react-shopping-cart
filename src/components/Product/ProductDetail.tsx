import { useNavigate } from '@tanstack/react-router';
import { flex, grid } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import Button from '@components/common/Button/Button';
import Image from '@components/common/Image/Image';
import useCartStore from '@/store/cartStore';
import useAlertDialogStore from '@/store/alertDialogStore';
import Divider from '@components/common/Divider/Divider';
import { usePostCartProductMutation } from '@/hooks/mutations/usePostCartProductMutation';
import { checkProductExistInCart } from '@/utils/cart';
import { formatToKRW } from '@/utils/formatter';
import { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({
  product: { id, name, price, imageUrl },
}: ProductDetailProps) {
  const navigate = useNavigate();

  const openAlertDialog = useAlertDialogStore.use.onOpen();
  const cart = useCartStore.use.cart();

  const { mutate: postCartProduct } = usePostCartProductMutation();

  const handleCartClick = () => {
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
    <article className={productDetailContainer}>
      <figure className={productDetailFigure}>
        <Image
          size='full'
          className={css({ objectFit: 'none' })}
          src={imageUrl}
          alt={name}
        />
      </figure>

      <section className={productDetailContentContainer}>
        <header className={productDetailHeader}>
          <span className={productDetailName}>{name}</span>

          <Divider color='lightGray' />
        </header>

        <div className={productDetailContent}>
          <div className={productDetailPriceContainer}>
            <span className={productDetailPriceLabel}>금액</span>
            <span className={productDetailPrice}>{formatToKRW(price)}</span>
          </div>

          <Button onClick={handleCartClick} className={cartButton}>
            장바구니
          </Button>
        </div>
      </section>
    </article>
  );
}

const productDetailContainer = grid({
  gridTemplateColumns: {
    base: 'repeat(1, minmax(0, 1fr))',
    md: 'repeat(2, minmax(0, 1fr))',
  },
  gap: {
    base: '20px',
    md: '100px',
  },
});

const productDetailFigure = css({
  outline: '1px solid #ddd',
  borderRadius: '4px',
});

const productDetailContentContainer = flex({
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '4px',
});

const productDetailHeader = flex({
  flexDirection: 'column',
  gap: '10px',
});

const productDetailName = css({
  fontSize: 'xl',
  fontWeight: 'semibold',
});

const productDetailContent = flex({
  flexDirection: 'column',
  gap: '20px',
});

const productDetailPriceContainer = flex({
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '40px',
});

const productDetailPriceLabel = css({
  fontSize: 'lg',
  fontWeight: '500',
});

const productDetailPrice = css({
  fontSize: 'lg',
  fontWeight: '600',
});

const cartButton = css({
  fontSize: '18px',
  fontWeight: '700',
});
