import { getData } from 'utils/fetch';
import type { CartProductType } from 'types';
import { useAppDispatch } from 'store';
import { getOrder, updateOrder } from 'store/feature/order/orderSlice';
import { useDialog } from 'common/hooks';

const useOrder = () => {
  const dispatch = useAppDispatch();
  const { showDialogUI } = useDialog();

  const orderCart = async () => {
    const cartItem = (await getData('/carts')) as CartProductType[];
    const orderItems = cartItem.filter((item) => {
      return item.isOrder === true;
    });
    dispatch(updateOrder(orderItems));
    await showDialogUI('orderCartItem');
  };

  const payment = () => {
    showDialogUI('payment');
  };

  const getOrderItem = () => {
    dispatch(getOrder('/orders'));
  };

  return { payment, orderCart, getOrderItem };
};
export default useOrder;
