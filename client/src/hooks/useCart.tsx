import { useAppSelector, useAppDispatch } from 'store';
import { addCart, updateCart, getCart, deleteCart } from 'store/feature/cart/cartSlice';

import { CartProductType } from 'types';
import { calculateCartProductTotal, calculateCartTotalAmount } from 'utils/app';
import { getData } from 'utils/fetch';

const useCart = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  const dispatch = useAppDispatch();
  const totalAmount = cartList.length && calculateCartTotalAmount(cartList);
  const totalPrice = cartList.length && calculateCartProductTotal(cartList);

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
  const DeleteCart = (product: CartProductType) => {
    dispatch(deleteCart(product));
    alert('장바구니에서 아이템이 삭제되었습니다!');
  };

  const CheckAllCart = async (checked: boolean) => {
    const cartData = (await getData('/carts')) as CartProductType[];
    cartData.forEach((product) => {
      UpdateCart({
        ...product,
        isOrder: !checked,
      });
    });
  };

  const DeleteCheckedCart = async () => {
    const cartData = (await getData('/carts')) as CartProductType[];
    cartData.forEach((product) => {
      if (product.isOrder) {
        dispatch(deleteCart(product));
      }
    });
  };

  return {
    AddCart,
    cartList,
    DeleteCart,
    UpdateCart,
    GetCart,
    totalAmount,
    totalPrice,
    CheckAllCart,
    DeleteCheckedCart,
  };
};
export default useCart;
