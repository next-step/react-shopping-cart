import { useAppDispatch } from 'store';
import useCart from './useCart';
import { updateOrder } from 'domain/store/feature/order/orderSlice';
import { useNavigate } from 'react-router-dom';
import { useDialog } from 'common/hooks';

const usePaymentApp = () => {
  const { cartList, deleteOrderedCartItem } = useCart();
  const { setDialogMessage } = useDialog();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const payment = async () => {
    const orderItems = cartList.filter((item) => {
      return item.isOrder === true;
    });
    await deleteOrderedCartItem();
    dispatch(updateOrder(orderItems));
    navigate('/orders');
  };
  const openPaymentApp = () => {
    setDialogMessage('paymentApp');
  };

  return { payment, openPaymentApp };
};

export default usePaymentApp;
