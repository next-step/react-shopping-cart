import { useCustomMutation, useCustomQuery } from '../../../hooks';
import { CartItemType, UpdateCountType } from '../../../types';
import { useCartDispatch, useCartState } from '../../../context/CartContext';
import {
  CONFIRM,
  COUNT_TYPE,
  DELETE_TYPE,
  DeleteType,
  SELECT_TYPE,
  SelectType,
} from '../../../constant';
import { useCallback, useEffect } from 'react';
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

export interface cartFunctionType {
  selectProduct: (selectRange: SelectType, selectId?: number) => void;
  deleteProduct: (method: DeleteType, id?: number) => void;
  updateCount: ({ selectId, type }: UpdateCountType) => void;
}

const useCart = () => {
  const { data, loading, error } = useCustomQuery<ResponseType>(`/carts`);
  const updateCountMutation = useCustomMutation<unknown, UpdateType>(
    (payload) => updateItemCount(payload)
  );
  const deleteItemMutation = useCustomMutation<unknown, SelectIdType>(
    (payload) => deleteCartItem(payload)
  );
  const deleteSelectItemMutation = useCustomMutation<unknown, SelectIdArr>(
    (payload) => deleteSelectedCartItem(payload)
  );
  const cartState = useCartState();
  const cartDispatch = useCartDispatch();

  const selectProduct = useCallback((selectRange: SelectType, id?: number) => {
    if (selectRange === SELECT_TYPE.ALL)
      cartDispatch({
        type: 'SELECT_ITEM',
        selectRange: SELECT_TYPE.ALL,
      });

    if (selectRange === SELECT_TYPE.SINGLE)
      cartDispatch({
        type: 'SELECT_ITEM',
        selectRange: SELECT_TYPE.SINGLE,
        selectId: id,
      });
  }, []);

  const updateCount = useCallback(({ selectId, type }: UpdateCountType) => {
    if (type === COUNT_TYPE.UP) {
      // 서버 상태 업데이트
      updateCountMutation.mutate({ selectId: selectId, type: COUNT_TYPE.UP });
      // 클라이언트 상태 업데이트
      cartDispatch({
        type: 'COUNT_UPDATE',
        selectId: selectId,
        direction: COUNT_TYPE.UP,
      });
    }

    if (type === COUNT_TYPE.DOWN) {
      // 서버 상태 업데이트
      updateCountMutation.mutate({ selectId: selectId, type: COUNT_TYPE.DOWN });
      // 클라이언트 상태 업데이트
      cartDispatch({
        type: 'COUNT_UPDATE',
        selectId: selectId,
        direction: COUNT_TYPE.DOWN,
      });
    }
  }, []);

  const deleteProduct = useCallback((method: DeleteType, id?: number) => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (!confirmRes) return;

    if (method === DELETE_TYPE.DIRECT) {
      if (!id) throw Error('선택된 ID값이 없습니다!');
      deleteItemMutation.mutate({ selectId: id });
      cartDispatch({
        type: 'DELETE_ITEM',
        selectId: id,
        deleteMethod: DELETE_TYPE.DIRECT,
      });
    }
    if (method === DELETE_TYPE.SELECT) {
      const selectIdArray = cartState.products.map((item) => {
        if (item.select) {
          return item.id;
        } else {
          return;
        }
      });
      deleteSelectItemMutation.mutate(selectIdArray as SelectIdArr);
      cartDispatch({ type: 'DELETE_ITEM', deleteMethod: DELETE_TYPE.SELECT });
    }
  }, []);

  useEffect(() => {
    if (data) {
      cartDispatch({ type: 'UPDATE_CART_STATE', products: data.response });
    }
  }, [data]);

  return {
    loading,
    error,
    cartFunction: {
      selectProduct,
      deleteProduct,
      updateCount,
    },
  };
};

export default useCart;
