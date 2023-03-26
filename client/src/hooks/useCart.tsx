import { useAppSelector, useAppDispatch } from 'store';
import { addCart, updateCart, getCart } from 'store/feature/cart/cartSlice';

import { CartProductType } from 'types';
import { calculateCartProductTotal, calculateCartTotalAmount } from 'utils/app';
import { getData } from 'utils/fetch';

const useCart = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  const dispatch = useAppDispatch();
  const totalAmount = calculateCartTotalAmount(cartList);
  const totalPrice = calculateCartProductTotal(cartList);

  const GetCart = () => {
    dispatch(getCart('/carts'));
  };

  const AddCart = async (product: CartProductType) => {
    const cartData = (await getData('/carts')) as CartProductType[];
    const myCartListProduct = cartData.find((cartProduct) => cartProduct.id === product.id);
    if (myCartListProduct) {
      alert('이미 추가하였습니다!');
      return;
    }
    dispatch(addCart(product)); // 서버에 저장
    alert('장바구니에 상품이 추가되었습니다!');
  };

  const UpdateCart = (product: CartProductType) => {
    dispatch(
      updateCart({
        ...product,
      })
    );
  };
  const deleteCart = (product: CartProductType) => {
    // dispatch(deleteProduct(product.id));
    alert('장바구니에서 아이템이 삭제되었습니다!');
  };

  const SelectAllCart = async () => {
    const cartData = (await getData('/carts')) as CartProductType[];
    cartData.forEach((product) => {
      UpdateCart({
        ...product,
        isOrder: !product.isOrder,
      });
    });
  };

  const deleteAllCart = () => {};

  return { AddCart, cartList, deleteCart, UpdateCart, GetCart, totalAmount, totalPrice, SelectAllCart };
};
export default useCart;
