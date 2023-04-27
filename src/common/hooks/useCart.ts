import { useAppSelector, useAppDispatch } from 'store';
import { updateCart, getCart, deleteCartItem, selectCartItem } from 'domain/store/feature/cart/cartSlice';

import { CartProductType } from 'domain/types';
import { calculateCartProductTotal, calculateCartTotalAmount } from 'domain/utils';
import { getData, postData } from 'common/utils/axios';

const useCart = () => {
  const cartList = useAppSelector((state) => state.cartReducer.cartList);
  const selectedCartItem = useAppSelector((state) => state.cartReducer.selectedCartItem);
  const status = useAppSelector((state) => state.cartReducer.status);
  const dispatch = useAppDispatch();
  const totalAmount = cartList && calculateCartTotalAmount(cartList);
  const totalPrice = cartList && calculateCartProductTotal(cartList);

  const getCartItems = () => {
    dispatch(getCart('/carts'));
  };

  const SelectCartItem = (cartProduct: CartProductType) => {
    dispatch(selectCartItem(cartProduct));
  };

  const addCartItem = async (product: CartProductType) => {
    try {
      const response = await postData('/carts', product);
      if (response.status === 400) {
        throw new Error();
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  const updateCartItem = (product: CartProductType) => {
    dispatch(updateCart(product));
  };

  const updateOrderCartItem = async (checked: boolean) => {
    const cartItem = (await getData('/carts')) as CartProductType[];
    cartItem.forEach((product) => {
      updateCartItem({
        ...product,
        isOrder: !checked,
      });
    });
  };

  const deleteOrderedCartItem = async () => {
    const cartItem = (await getData('/carts')) as CartProductType[];
    cartItem.forEach((product) => {
      if (product.isOrder) {
        dispatch(deleteCartItem(product));
      }
    });
  };

  return {
    addCartItem,
    cartList,
    getCartItems,
    totalAmount,
    totalPrice,
    updateOrderCartItem,
    deleteOrderedCartItem,
    selectedCartItem,
    SelectCartItem,
    updateCartItem,
    status,
  };
};
export default useCart;
