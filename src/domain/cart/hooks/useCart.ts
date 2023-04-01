import { useCustomMutation, useCustomQuery } from '../../../hooks';
import { CartItemType, UpdateCountType } from '../../../types';
import { useCartDispatch, useCartState } from '../../../context/CartContext';
import {
  CONFIRM,
  COUNT_TYPE,
  DELETE_TYPE,
  DeleteType,
} from '../../../constant';
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
  deleteProduct: (method: DeleteType, id?: number) => void;
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
  };

  const deleteProduct = (method: DeleteType, id?: number) => {
    const confirmRes = confirm(CONFIRM.CART_DELETE);
    if (!confirmRes) return;

    if (method === DELETE_TYPE.DIRECT) {
      if (!id) throw Error('선택된 ID값이 없습니다!');
      deleteItem.mutate({ selectId: id });
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
      deleteSelectItem.mutate(selectIdArray as SelectIdArr);
      cartDispatch({ type: 'DELETE_ITEM', deleteMethod: DELETE_TYPE.SELECT });
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
      deleteProduct,
      updateCount,
    },
  };
};

export default useCart;
