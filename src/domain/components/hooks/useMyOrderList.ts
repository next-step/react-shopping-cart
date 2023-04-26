import { useCart, useDialog } from 'common/hooks';
import type { CartProductType } from 'domain/types';
import { useNavigate, useLocation } from 'react-router-dom';

const useMyOrderList = (id: number) => {
  const { SelectCartItem } = useCart();
  const { showDialogUI } = useDialog();
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveDetailPage = Number(location.pathname.split('/')[2]) === id;

  const addToCart = async (product: CartProductType) => {
    SelectCartItem({ ...product, isOrder: false, amount: 1 });
    showDialogUI('addCartItem');
  };
  const moveToDetailPage = (url: string) => {
    navigate({ pathname: url });
  };

  return { addToCart, moveToDetailPage, isActiveDetailPage };
};

export default useMyOrderList;
