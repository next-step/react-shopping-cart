import { useAppSelector, useAppDispatch } from 'store';
import { updateCart, getCart, deleteCartItem } from 'store/feature/cart/cartSlice';

import { CartProductType } from 'types';
import { calculateCartProductTotal, calculateCartTotalAmount } from 'utils/app';
import { getData, postData } from 'utils/fetch';

const useCartStore = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  const dispatch = useAppDispatch();
  const totalAmount = cartList && calculateCartTotalAmount(cartList);
  const totalPrice = cartList && calculateCartProductTotal(cartList);

  const GetCart = () => {
    dispatch(getCart('/carts'));
  };

  const AddCart = async (product: CartProductType) => {
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

  const UpdateCart = (product: CartProductType) => {
    dispatch(updateCart(product));
  };

  const checkAllCartItem = async (checked: boolean) => {
    const cartData = (await getData('/carts')) as CartProductType[];
    cartData.forEach((product) => {
      UpdateCart({
        ...product,
        isOrder: !checked,
      });
    });
  };

  const DeleteCartItem = async () => {
    const cartData = (await getData('/carts')) as CartProductType[];
    cartData.forEach((product) => {
      if (product.isOrder) {
        dispatch(deleteCartItem(product));
      }
    });
  };

  return {
    AddCart,
    cartList,
    UpdateCart,
    GetCart,
    totalAmount,
    totalPrice,
    checkAllCartItem,
    DeleteCartItem,
  };
};
export default useCartStore;
