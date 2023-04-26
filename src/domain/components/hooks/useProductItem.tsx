import { useCart, useDialog } from 'common/hooks';
import { useNavigate } from 'react-router-dom';
import type { ProductType } from 'domain/types';

const useProductItem = (product: ProductType) => {
  const { SelectCartItem } = useCart();
  const navigate = useNavigate();
  const { showDialogUI } = useDialog();

  const addToCart = async () => {
    SelectCartItem({ ...product, isOrder: false, amount: 1 });
    showDialogUI('addCartItem');
  };
  const moveToProductDetailPage = () => {
    navigate('/product/' + product.id);
  };

  return { addToCart, moveToProductDetailPage };
};
export default useProductItem;
