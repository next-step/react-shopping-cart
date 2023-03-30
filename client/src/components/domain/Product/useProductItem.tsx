import { useCart, useDialog } from 'hooks';
import { useNavigate } from 'react-router-dom';
import type { ProductType } from 'types';

const useProductItem = (product: ProductType) => {
  const { showDialogUI } = useDialog();
  const { AddCart } = useCart();
  const navigate = useNavigate();

  const handleCartButton = async () => {
    await AddCart({ ...product, isOrder: false, amount: 1 });
    showDialogUI('cart');
  };
  const handleProductImage = () => {
    navigate('/product/' + product.id);
  };

  return { handleCartButton, handleProductImage };
};
export default useProductItem;
