import { useCart, useDialog } from 'hooks';
import { useNavigate } from 'react-router-dom';
import type { ProductType } from 'types';

const useProductItem = (product: ProductType) => {
  const { AddCart } = useCart();
  const navigate = useNavigate();

  const { showDialogUI } = useDialog();

  const handleCartButton = async () => {
    const isValid = await AddCart({ ...product, isOrder: false, amount: 1 });
    return isValid ? showDialogUI('moveCartPage') : alert('장바구니에 이미 추가된 상품입니다');
  };
  const handleProductImage = () => {
    navigate('/product/' + product.id);
  };

  return { handleCartButton, handleProductImage };
};
export default useProductItem;
