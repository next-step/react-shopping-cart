import { useAppDispatch } from 'store';
import { getOrder } from 'domain/store/feature/order/orderSlice';
import { useDialog } from 'common/hooks';

const useOrder = () => {
  const dispatch = useAppDispatch();
  const { setDialogMessage } = useDialog();

  const orderCart = () => {
    setDialogMessage('orderCartItem');
  };

  const payment = () => {
    setDialogMessage('payment');
  };

  const getOrderItem = () => {
    dispatch(getOrder('/orders'));
  };

  return { payment, orderCart, getOrderItem };
};
export default useOrder;
