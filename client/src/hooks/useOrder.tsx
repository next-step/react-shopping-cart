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

  const handleCartOrderButton = async () => {
    // 현재 order된 아이템을 가져온다. 가져온 아이템을 /order/update 보내서 orderitem을 갱신하고 orderTrue삭제후 orderpage이동
    const cartItem = (await getData('/carts')) as CartProductType[];
    const orderItems = cartItem.filter((item) => {
      return item.isOrder === true;
    });
    dispatch(updateOrder(orderItems));
    await showDialogUI('cartorder');
  };
  const handleOrderButton = () => {};

  const GetOrder = () => {
    dispatch(getOrder('/orders'));
  };

  return { handleCartOrderButton, handleOrderButton, orderList, GetOrder, totalPrice, totalAmount };
};
export default useOrder;
