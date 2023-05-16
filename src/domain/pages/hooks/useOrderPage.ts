import { useNavigate } from 'react-router-dom';
import { useDialog } from 'common/hooks';
import { useCart, useOrder } from 'domain/hooks';
import { handlePaymentApp, updateOrder } from 'domain/store/feature/order/orderSlice';
import { usePayment } from 'payment-junyoung';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import usePaymentApp from 'domain/hooks/usePaymentApp';

const useOrderPage = () => {
  const dispatch = useAppDispatch();
  const { cartList, status, totalAmount, totalPrice } = useCart();

  const { payment } = usePaymentApp();

  const orderStore = useAppSelector((state) => state.orderReducer);
  const isOpenPaymentUI = orderStore.isOpenPaymentApp;
  const errorMessage = orderStore.errorMessage;

  const { isPayment } = usePayment();

  const handlePaymentAppCloseButton = () => {
    dispatch(handlePaymentApp(false));
  };

  useEffect(() => {
    if (isPayment) {
      dispatch(handlePaymentApp(false));
      payment();
    }
  }, [isPayment]);

  return {
    isOpenPaymentUI,
    status,
    cartList,
    totalAmount,
    totalPrice,
    handlePaymentAppCloseButton,
    errorMessage,
  };
};
export default useOrderPage;
