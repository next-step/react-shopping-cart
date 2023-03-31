import { useCustomQuery } from '../../../hooks';
import { CartItemType } from '../../../types';
import { useCartDispatch } from '../../../context/CartContext';
import { CONFIRM } from '../../../constant';

interface ResponseType {
  response: CartItemType[];
}

export interface CartDispatchFunctionType {
  selectProduct: (id: number) => void;

  selectAllProduct: () => void;
  deleteSelectedProduct: () => void;
  deleteProduct: (id: number) => void;
  countUp: (id: number) => void;
  countDown: (id: number) => void;
}
const useCart = () => {
  const { data, loading, error } = useCustomQuery<ResponseType>(`/carts`);
  const cartDispatch = useCartDispatch();

  const selectProduct = (id: number) =>
    cartDispatch({ type: 'SELECT_ITEM', selectId: id });

  const selectAllProduct = () => cartDispatch({ type: 'SELECT_ALL_ITEM' });

  const deleteSelectedProduct = () => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (confirmRes) cartDispatch({ type: 'DELETE_SELECT_ITEM' });
  };

  const deleteProduct = (id: number) => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (confirmRes) cartDispatch({ type: 'DELETE_ITEM', selectId: id });
  };

  const countUp = (id: number) =>
    cartDispatch({ type: 'COUNT_UP_ITEM', selectId: id });

  const countDown = (id: number) =>
    cartDispatch({ type: 'COUNT_DOWN_ITEM', selectId: id });

  const cartData = data?.response;

  return {
    cartData,
    loading,
    error,
    cartDispatchFunction: {
      selectProduct,
      selectAllProduct,
      deleteSelectedProduct,
      deleteProduct,
      countUp,
      countDown,
    },
  };
};

export default useCart;
