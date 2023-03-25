import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { addProduct } from 'store/feature/cart/cartSlice';
import { ProductType } from 'types';

const useCart = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const addCart = (product: ProductType) => {
    dispatch(addProduct(product));
    alert('장바구니에 상품이 추가되었습니다!');
  };

  const totalPrice = (): number => {
    return cartList.reduce((prev, next) => {
      return prev + next.price;
    }, 0);
  };

  return { addCart, cartList, totalPrice };
};
export default useCart;
