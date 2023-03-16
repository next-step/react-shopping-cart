import { CartContext } from 'context/Cart';
import { useContext } from 'react';
import { ProductType } from 'types';

const useCart = () => {
  const { addItem, cartList } = useContext(CartContext);
  const addCart = (product: ProductType) => {
    addItem(product);
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
