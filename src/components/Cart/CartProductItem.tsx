import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import QuantityCounter from '@components/common/QuantityCounter/QuantityCounter';
import IconButton from '@components/common/Button/IconButton';
import CheckBox from '@components/common/CheckBox/CheckBox';
import Image from '@components/common/Image/Image';
import { CartProduct } from '@/types/cart';
import { formatToKRW } from '@/utils/formatter';
import trashImg from '@/assets/svgs/trash.svg';
import { MAX_QUANTITY, MIN_QUANTITY } from '@/constants/cart';

interface CartProductItemProps {
  cartProduct: CartProduct;
  isSelected: boolean;
  onToggleSelection: (productId: number) => void;
  onIncreaseQuantity: (productId: number) => void;
  onDecreaseQuantity: (productId: number) => void;
  onRemoveProduct: (productId: number) => void;
}

export default function CartProductItem({
  cartProduct,
  isSelected,
  onToggleSelection,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveProduct,
}: CartProductItemProps) {
  const {
    product: { id: productId, name, price, imageUrl },
    quantity,
  } = cartProduct;

  return (
    <li className={cartProductItemContainer}>
      <section className={cartProductItemLeftSection}>
        <CheckBox
          colorScheme='blue'
          isChecked={isSelected}
          onChange={() => onToggleSelection(productId)}
        />
        <Image
          className={css({
            objectFit: 'cover',
            borderRadius: '2px',
          })}
          size='sm'
          variant='outline'
          src={imageUrl}
          alt={name}
        />
      </section>

      <section className={cartProductItemRightSection}>
        <span className={cartProductItemName}>{name}</span>
        <div className={cartProductItemActionContainer}>
          <div className={trashIconButtonContainer}>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='remove items'
              onClick={() => onRemoveProduct(productId)}
              icon={<Image variant='icon' src={trashImg} alt='삭제' />}
            />
          </div>

          <div className={cartProductItemPriceAndQuantityCounterContainer}>
            <div className={cartProductItemPriceContainer}>
              <span className={cartProductItemPrice}>
                {formatToKRW(price * (quantity ?? 1))}
              </span>
            </div>
            <QuantityCounter
              min={MIN_QUANTITY}
              max={MAX_QUANTITY}
              quantity={quantity}
              onIncrement={() => onIncreaseQuantity(productId)}
              onDecrement={() => onDecreaseQuantity(productId)}
            />
          </div>
        </div>
      </section>
    </li>
  );
}

const cartProductItemContainer = flex({ gap: '10px' });

const cartProductItemLeftSection = flex({
  justifyContent: 'row',
  alignItems: 'center',
  gap: '10px',
});

const cartProductItemRightSection = flex({
  position: 'relative',
  flex: '1 0 0',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: {
    base: '4px',
    sm: '10px',
  },
});

const cartProductItemName = css({
  fontSize: {
    base: '14px',
    sm: '18px',
  },
  paddingRight: '12px',
});

const cartProductItemActionContainer = flex({
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const trashIconButtonContainer = flex({
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

const cartProductItemPriceAndQuantityCounterContainer = flex({
  position: {
    base: 'absolute',
    sm: 'static',
  },
  bottom: {
    base: '4px',
    sm: 'unset',
  },
  left: {
    base: '0',
    sm: 'unset',
  },
  width: '100%',
  paddingLeft: {
    base: '4px',
    sm: '0',
  },
  flexDirection: {
    base: 'row',
    sm: 'column',
  },
  alignItems: 'flex-end',
  justifyContent: {
    base: 'space-between',
    sm: 'flex-start',
  },
  gap: '10px',
});

const cartProductItemPriceContainer = flex({
  gap: '2px',
  justifyContent: {
    base: 'flex-start',
    sm: 'flex-end',
  },
  alignItems: 'center',
  width: {
    base: '150px',
    sm: '100%',
  },
  overflow: {
    base: 'hidden',
    sm: 'visible',
  },
});

const cartProductItemPrice = css({
  fontSize: {
    base: '14px',
    sm: '18px',
  },
});
