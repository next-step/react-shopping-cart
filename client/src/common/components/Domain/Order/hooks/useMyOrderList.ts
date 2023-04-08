import { useCartStore, useDialog } from 'common/hooks';
import type { CartProductType } from 'types';
import { useNavigate, useLocation } from 'react-router-dom';

const useMyOrderList = (id: number) => {
  const { AddCart } = useCartStore();
  const { showDialogUI } = useDialog();
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveDetailPage = Number(location.pathname.split('/')[2]) === id;

  const addToCart = async (product: CartProductType) => {
    const isValid = await AddCart(product);
    return isValid ? showDialogUI('moveCartPage') : alert('장바구니에 이미 추가된 상품입니다');
  };
  const moveToDetailPage = (url: string) => {
    navigate({ pathname: url });
  };

  return { addToCart, moveToDetailPage, isActiveDetailPage };
};

export default useMyOrderList;
