import { useCustomMutation, useCustomQuery } from '../../../hooks';
import { CartItemType, UpdateCountType } from '../../../types';
import { useCartDispatch, useCartState } from '../../../context/CartContext';
import { CONFIRM, COUNT_TYPE } from '../../../constant';
import { useEffect } from 'react';
import {
  deleteCartItem,
  SelectIdArr,
  SelectIdType,
  deleteSelectedCartItem,
  updateItemCount,
} from '../../../apiClient';
import { UpdateType } from '../../../mocks/handlers';

interface ResponseType {
  response: CartItemType[];
}

export interface CartDispatchFunctionType {
  selectProduct: (id: number) => void;

  selectAllProduct: () => void;
  deleteSelectedProduct: () => void;
  deleteProduct: (id: number) => void;
  updateCount: ({ selectId, type }: UpdateCountType) => void;
}

const useCart = () => {
  const { data, loading, error } = useCustomQuery<ResponseType>(`/carts`);
  const updateCountMutation = useCustomMutation<unknown, UpdateType>(
    (payload) => updateItemCount(payload)
  );
  const deleteItem = useCustomMutation<unknown, SelectIdType>((payload) =>
    deleteCartItem(payload)
  );
  const deleteSelectItem = useCustomMutation<unknown, SelectIdArr>((payload) =>
    deleteSelectedCartItem(payload)
  );
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();

  const selectProduct = (id: number) =>
    cartDispatch({ type: 'SELECT_ITEM', selectId: id });

  const selectAllProduct = () => cartDispatch({ type: 'SELECT_ALL_ITEM' });

  const updateCount = ({ selectId, type }: UpdateCountType) => {
    if (type === COUNT_TYPE.UP) {
      updateCountMutation.mutate({ selectId: selectId, type: COUNT_TYPE.UP });
      cartDispatch({
        type: 'COUNT_UPDATE',
        selectId: selectId,
        direction: COUNT_TYPE.UP,
      });
    }

    if (type === COUNT_TYPE.DOWN) {
      updateCountMutation.mutate({ selectId: selectId, type: COUNT_TYPE.DOWN });
      cartDispatch({
        type: 'COUNT_UPDATE',
        selectId: selectId,
        direction: COUNT_TYPE.DOWN,
      });
    }
  };

  const deleteSelectedProduct = () => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (confirmRes) {
      const selectIdArray = cartState.products.map((item) => {
        if (item.select) {
          return item.id;
        } else {
          return;
        }
      });
      deleteSelectItem.mutate(selectIdArray as SelectIdArr);
      cartDispatch({ type: 'DELETE_SELECT_ITEM' });
    }
  };

  const deleteProduct = (id: number) => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (confirmRes) {
      deleteItem.mutate({ selectId: id });
      cartDispatch({ type: 'DELETE_ITEM', selectId: id });
    }
  };

  useEffect(() => {
    if (data) {
      cartDispatch({ type: 'UPDATE_CART_STATE', products: data.response });
    }
  }, [data]);

  return {
    loading,
    error,
    cartDispatchFunction: {
      selectProduct,
      selectAllProduct,
      deleteSelectedProduct,
      deleteProduct,
      updateCount,
    },
  };
};

export default useCart;
