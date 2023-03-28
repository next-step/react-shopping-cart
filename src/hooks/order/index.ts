import { UseQueryResult, useMutation, useQuery } from 'react-query';
import { atom, useSetRecoilState } from 'recoil';
import { addOrder, getOrders } from 'services/order';
import { Order, OrderDetail } from 'types/type';

const ORDER = 'order'

export const tempOrderState = atom<OrderDetail[]>({
  key: 'tempCartState',
  default: [] as OrderDetail[]
});

export function useOrderList(): UseQueryResult<Order[], Error> {
  const { data, isLoading, isError } = useQuery([ORDER], () => getOrders());

  return { data, isLoading, isError } as UseQueryResult<Order[], Error>;
}

export function useAddOrder() {
  return useMutation((item: OrderDetail[]) => addOrder(item), {
    onSuccess: (orderItem) => {
      console.log("success", orderItem)
    },
    onError: (error: Error) => {
      throw new Error(`Failed to add cart item: ${error.message}`);
    },
  });
}


export function useOrder() {
  const setTempOrderState = useSetRecoilState(tempOrderState);

  const addTempCart = (checked: boolean, item: any, quantity?: number) => {
    const { product: { id, imageUrl, name, price } } = item
    if (checked) {
      setTempOrderState((prevTempCartState) => [
        ...prevTempCartState,
        {
          id,
          imageUrl,
          name,
          quantity: quantity ? quantity : 1,
          price,
        },
      ]);
    } else {
      setTempOrderState((prevTempCartState) => {
        const updatedTempCartItems = prevTempCartState.filter(
          (tempCartItem) => tempCartItem.id !== id
        );
        return updatedTempCartItems;
      });
    }
  }

  const addTempAllCart = (checked: boolean, items: any) => {
    if (checked) {
      setTempOrderState((prevTempCartState) => [
        ...prevTempCartState,
        ...items.map((item: any) => {
          const { id, imageUrl, name, price } = item
          return {
            id,
            imageUrl,
            name,
            quantity: 1,
            price,
          }
        })
      ]);
    } else {
      setTempOrderState((prevTempCartState) => {
        const updatedTempCartItems = prevTempCartState.filter(
          (tempCartItem) => !items.find((item: any) => item.id === tempCartItem.id)
        );
        return updatedTempCartItems;
      });
    }
  }

  const updateCartQuantity = (itemId: number, quantity: number) => {

    setTempOrderState((prevTempCartState) => {
      const updatedTempCartItems = prevTempCartState.map((tempCartItem) => {
        if (tempCartItem.id === itemId) {
          return {
            ...tempCartItem,
            quantity
          };
        }
        return tempCartItem;
      });
      return updatedTempCartItems;
    });
  }

  return { updateCartQuantity, addTempCart, addTempAllCart }
}

