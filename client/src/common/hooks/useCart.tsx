import { useAppSelector, useAppDispatch } from 'store';
import { updateCart, getCart, deleteCartItem, selectCartItem } from 'store/feature/cart/cartSlice';

import { CartProductType } from 'types';
import { calculateCartProductTotal, calculateCartTotalAmount } from 'utils/app';
import { getData, postData } from 'utils/fetch';

const useCart = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  const selectedCartItem = useAppSelector((state) => state.cart.selectedCartItem);
  const status = useAppSelector((state) => state.cart.status);
  const dispatch = useAppDispatch();
  const totalAmount = cartList && calculateCartTotalAmount(cartList);
  const totalPrice = cartList && calculateCartProductTotal(cartList);

  const getCartFromServer = () => {
    dispatch(getCart('/carts'));
  };

  const SelectCartItem = (cartProduct: CartProductType) => {
    dispatch(selectCartItem(cartProduct));
  };

  const addServerCartItem = async (product: CartProductType) => {
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

  const updateSeverCartItem = (product: CartProductType) => {
    dispatch(updateCart(product));
  };

  const updateCheckAllServerCartItem = async (checked: boolean) => {
    const cartData = (await getData('/carts')) as CartProductType[];
    cartData.forEach((product) => {
      updateSeverCartItem({
        ...product,
        isOrder: !checked,
      });
    });
  };

  const deleteServerCartItem = async () => {
    const cartData = (await getData('/carts')) as CartProductType[];
    cartData.forEach((product) => {
      if (product.isOrder) {
        dispatch(deleteCartItem(product));
      }
    });
  };

  return {
    addServerCartItem,
    cartList,
    getCartFromServer,
    totalAmount,
    totalPrice,
    updateCheckAllServerCartItem,
    deleteServerCartItem,
    selectedCartItem,
    SelectCartItem,
    updateSeverCartItem,
    status,
  };
};
export default useCart;
