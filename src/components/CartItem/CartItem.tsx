import React from 'react';
import deleteSvg from '../../assets/svgs/trash.svg';
import AmountHandler from './AmountHandler';
import useCartItem from './hooks/useCartItem';
import { IProduct } from '../../domain/shopping-cart/types';
import { CART } from '../../domain/shopping-cart/constants';

type TCartItemProps = {
  product: IProduct;
};

const {
  PRODUCTS: { DEFAULT_INITIAL_AMOUNT },
} = CART;

function CartItem({ product }: TCartItemProps) {
  const { name, imageUrl, checked, amount = DEFAULT_INITIAL_AMOUNT } = product;
  const { totalPrice, handleToggleChecked, handleRemovingProduct, handleIncrement, handleDecrement } =
    useCartItem(product);

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
