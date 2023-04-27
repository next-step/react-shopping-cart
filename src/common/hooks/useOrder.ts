import { useAppDispatch } from 'store';
import { getOrder } from 'domain/store/feature/order/orderSlice';
import { useDialog } from 'common/hooks';

const useOrder = () => {
  const dispatch = useAppDispatch();
  const { setDialogUI } = useDialog();

  const orderCart = () => {
    setDialogUI('orderCartItem');
  };

  const payment = () => {
    setDialogUI('payment');
  };

  const getOrderItem = () => {
    dispatch(getOrder('/orders'));
  };

  return { payment, orderCart, getOrderItem };
};
export default useOrder;
