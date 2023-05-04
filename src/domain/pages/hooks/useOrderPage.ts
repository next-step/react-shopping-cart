import { useNavigate } from 'react-router-dom';
import { useDialog } from 'common/hooks';
import { useOrder, useCart } from 'domain/hooks';
import { handlePaymentApp } from 'domain/store/feature/order/orderSlice';
import { usePayment } from 'payment-junyoung';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';

const useOrderPage = () => {
  const { getOrderItem } = useOrder();
  const { deleteOrderedCartItem } = useCart();
  const { isOpenDialog, dialogTitle } = useDialog();
  const navigate = useNavigate();

  const orderStore = useAppSelector((state) => state.orderReducer);
  const orderedList = orderStore.orderedList;
  const orderListLength = orderedList.length;
  const recentlyOrderedItem = orderedList[orderListLength - 1];
  const totalAmount = recentlyOrderedItem.ordered.totalAmount;
  const totalPrice = recentlyOrderedItem.ordered.totalPrice;
  const ordredItems = recentlyOrderedItem.ordered.items;
  const status = orderStore.status;
  const isOpenPaymentUI = orderStore.isOpenPaymentApp;
  const dispatch = useAppDispatch();

  const { isPayment } = usePayment();

  const handlePaymentAppCloseButton = () => {
    dispatch(handlePaymentApp(false));
  };

  useEffect(() => {
    getOrderItem();
  }, []);

  // payment APP 결제완료시
  useEffect(() => {
    if (isPayment) {
      deleteOrderedCartItem();
      dispatch(handlePaymentApp(false));
      navigate('/orders');
    }
  }, [isPayment]);

  return {
    isOpenPaymentUI,
    status,
    isOpenDialog,
    dialogTitle,
    handlePaymentAppCloseButton,
    totalAmount,
    ordredItems,
    totalPrice,
  };
};
export default useOrderPage;
