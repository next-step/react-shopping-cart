import { useEffect } from 'react';
import { useCart } from 'domain/hooks';
import { handlePaymentApp } from 'domain/store/feature/order/orderSlice';
import { usePayment } from 'payment-junyoung';
import { useAppDispatch, useAppSelector } from 'store';
import usePaymentApp from 'domain/hooks/usePaymentApp';

const useOrderPage = () => {
  const dispatch = useAppDispatch();
  const { cartList, status, totalAmount, totalPrice, getCartItems } = useCart();
  const { payment } = usePaymentApp();

  const orderStore = useAppSelector((state) => state.orderReducer);
  const isOpenPaymentUI = orderStore.isOpenPaymentApp;
  const errorMessage = orderStore.errorMessage;

  const { isPayment } = usePayment();

  const handlePaymentAppCloseButton = () => {
    dispatch(handlePaymentApp(false));
  };

  useEffect(() => {
    getCartItems();
  }, []);

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
