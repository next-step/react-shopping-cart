// import { useAppSelector, useAppDispatch } from 'store';
// import { addOrderProduct, deleteOrderProduct } from 'store/feature/order/orderslice';
// import type { OrderProductType, CartListType } from 'types';
// import { calculateOrderProductTotal, calculateTotalAmount } from 'utils/app';

// const useOrder = () => {
//   const dispatch = useAppDispatch();
//   const orderStore = useAppSelector((store) => store.order);
//   const orderList = orderStore.orderList;
//   const totalPrice = calculateOrderProductTotal(orderList);
//   const totalAmount = calculateTotalAmount(orderList);

//   const AddOrderProduct = (product: OrderProductType) => {
//     const myOrderListProduct = orderList.find((order) => order.id === product.id);
//     // 이미 존재하는 아이템이면 지운다.
//     if (myOrderListProduct) {
//       DeleteOrderProduct(product);
//     }

//     dispatch(addOrderProduct(product));
//   };
//   const DeleteOrderProduct = (product: OrderProductType) => {
//     dispatch(deleteOrderProduct(product.id));
//   };

//   const AddAllOrderProudct = (cartList: CartListType) => {
//     // 현재 Cart에있는 모든 아이템들을 주문목록에 추가한다.
//   };

//   return { AddOrderProduct, DeleteOrderProduct, totalPrice, totalAmount, orderList };
// };
// export default useOrder;
