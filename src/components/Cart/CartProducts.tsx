import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import CartProductItem from './CartProductItem';
import { CartProduct } from '@/types/cart';

interface CartProductsProps {
  hasProducts: boolean;
  cartProducts: CartProduct[];
  selectionProducts: Set<number>;
  onToggleSelection: (productId: CartProduct['id']) => void;
  onIncreaseQuantity: (productId: CartProduct['id']) => void;
  onDecreaseQuantity: (productId: CartProduct['id']) => void;
  onRemoveProduct: (productId: CartProduct['id']) => void;
}

export default function CartProducts({
  hasProducts,
  cartProducts,
  selectionProducts,
  onToggleSelection,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveProduct,
}: CartProductsProps) {
  return (
    <>
      {hasProducts ? (
        <ul className={cartProductItemContainer}>
          {cartProducts.map((cartProduct) => (
            <CartProductItem
              key={cartProduct.id}
              cartProduct={cartProduct}
              isSelected={selectionProducts.has(cartProduct.product.id)}
              onToggleSelection={onToggleSelection}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
              onRemoveProduct={onRemoveProduct}
            />
          ))}
        </ul>
      ) : (
        <div className={empty}>
          <p className={emptyMessage}>장바구니에 담긴 상품이 없습니다.</p>
        </div>
      )}
    </>
  );
}

const cartProductItemContainer = flex({
  flexDirection: 'column',
  gap: '20px',
  padding: '0',
  flexGrow: 1,
});

const empty = flex({
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: {
    base: '100px',
    lg: '200px',
  },
});

const emptyMessage = css({
  fontSize: '20px',
  color: '#555',
});
