import { useNavigate } from 'react-router-dom';
import { useDialog } from 'common/hooks';
import { useOrder, useCart } from 'domain/hooks';
import { handlePaymentApp, updateOrder } from 'domain/store/feature/order/orderSlice';
import { usePayment } from 'payment-junyoung';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';

const useOrderPage = () => {
  const dispatch = useAppDispatch();
  const { deleteOrderedCartItem, cartList, status, totalAmount, totalPrice } = useCart();
  const { isOpenDialog, dialogTitle } = useDialog();
  const navigate = useNavigate();

  const orderStore = useAppSelector((state) => state.orderReducer);
  const isOpenPaymentUI = orderStore.isOpenPaymentApp;

  const { isPayment } = usePayment();

  const handlePaymentAppCloseButton = () => {
    dispatch(handlePaymentApp(false));
  };

  useEffect(() => {
    // payment APP 결제완료시
    if (isPayment) {
      const orderItems = cartList.filter((item) => {
        return item.isOrder === true;
      });
      deleteOrderedCartItem();
      dispatch(updateOrder(orderItems));
      dispatch(handlePaymentApp(false));
      navigate('/orders');
    }
  }, [isPayment]);

  return {
    isOpenPaymentUI,
    status,
    isOpenDialog,
    dialogTitle,
    cartList,
    totalAmount,
    totalPrice,
    handlePaymentAppCloseButton,
  };
};
export default useOrderPage;
