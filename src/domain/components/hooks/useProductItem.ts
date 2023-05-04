import type { ProductType } from 'domain/types';
import { useDialog } from 'common/hooks';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'domain/hooks';

const useProductItem = (product: ProductType) => {
  const { SelectCartItem } = useCart();
  const navigate = useNavigate();
  const { setDialogMessage } = useDialog();

  const addToCart = async () => {
    SelectCartItem({ ...product, isOrder: false, amount: 1 });
    setDialogMessage('addCartItem');
  };
  const moveToProductDetailPage = () => {
    navigate('/product/' + product.id);
  };

  return { addToCart, moveToProductDetailPage };
};
export default useProductItem;
