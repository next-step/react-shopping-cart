import { getData } from 'utils/fetch';
import type { CartProductType } from 'types';
import { useAppDispatch, useAppSelector } from 'store';
import { getOrder, updateOrder } from 'store/feature/order/orderSlice';
import { useDialog } from 'hooks';
import { calculateOrderProductTotal, calculateOrderTotalAmount } from 'utils/app';

const useOrder = () => {
  const orderList = useAppSelector((state) => state.order.orderList);
  const totalPrice = orderList && calculateOrderProductTotal(orderList);
  const totalAmount = orderList && calculateOrderTotalAmount(orderList);

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

  const payment = () => {};

  const getOrderItem = () => {
    dispatch(getOrder('/orders'));
  };

  return { payment, orderCart, orderList, getOrderItem, totalPrice, totalAmount };
};
export default useOrder;
