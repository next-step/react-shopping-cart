import { useAppSelector, useAppDispatch } from 'store';
import { addCart, deleteProduct, getCart } from 'store/feature/cart/cartSlice';

import { CartProductType } from 'types';

const useCart = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  const dispatch = useAppDispatch();

  const AddCart = (product: CartProductType) => {
    // const myCartListProduct = cartList.find((cartProduct) => cartProduct.id === product.id);
    // 이미 존재하는 아이템이면 지운다. (중복처리)
    // if (myCartListProduct) {
    //   dispatch(deleteProduct(product.id));
    // }

    // 서버에 저장
    dispatch(addCart(product));
    alert('장바구니에 상품이 추가되었습니다!');
  };

  const deleteCart = (product: CartProductType) => {
    dispatch(deleteProduct(product.id));
    alert('장바구니에서 아이템이 삭제되었습니다!');
  };

  const deleteAllCart = () => {};

  return { AddCart, cartList, deleteCart };
};
export default useCart;
