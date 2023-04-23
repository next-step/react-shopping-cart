import React, { useCallback, useMemo } from 'react';
import { IProduct } from '../../types/types';
import deleteSvg from '../../assets/svgs/trash.svg';
import AmountHandler from './AmountHandler';
import { useCartContext } from '../../context/CartContext/CartContext';

type TCartItemProps = {
  product: IProduct;
};

function CartItem({ product }: TCartItemProps) {
  const {
    cart,
    cartDataHandlers: { updateProduct, removeProduct },
  } = useCartContext();
  const { name, imageUrl, price, checked, amount = 1 } = product;
  const totalPrice = useMemo(() => price * amount, [amount]);

  const handleToggleChecked = useCallback(() => {
    updateProduct({ ...product, checked: !checked });
  }, [cart]);

  const handleRemovingProduct = useCallback(() => {
    if (!confirm('장바구니에서 선택한 상품을 삭제하시겠습니까?')) return;

    removeProduct(product);
  }, [cart]);

  const handleIncrement = useCallback(() => {
    updateProduct({ ...product, amount: amount + 1 });
  }, [cart]);

  const handleDecrement = useCallback(() => {
    if (amount - 1 === 0) return;

    updateProduct({ ...product, amount: amount - 1 });
  }, [cart]);

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input
          type="checkbox"
          name="checkbox"
          className="checkbox"
          checked={!!checked}
          onChange={handleToggleChecked}
        />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src={deleteSvg} alt="삭제" onClick={handleRemovingProduct} />
        <AmountHandler amount={amount} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        <span className="cart-price">{totalPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default CartItem;
