import { useCartStore, useDialog } from 'common/hooks';
import type { CartProductType } from 'types';

const useMyOrderList = () => {
  const { AddCart } = useCartStore();
  const { showDialogUI } = useDialog();

  const addToCart = async (product: CartProductType) => {
    const isValid = await AddCart(product);
    return isValid ? showDialogUI('moveCartPage') : alert('장바구니에 이미 추가된 상품입니다');
  };
  return { addToCart };
};

export default useMyOrderList;
