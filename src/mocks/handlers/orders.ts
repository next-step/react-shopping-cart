import { http, HttpResponse, PathParams } from 'msw';
import { MOCK_ORDERS_DATA } from '../data/orders';
import { Order } from '@/types/order';
import { generateUniqueId } from '@/utils/uniqueId';

const orderList = MOCK_ORDERS_DATA;

export const ordersHandlers = [
  // 주문 목록(내역 조회)
  http.get('/orders', () => {
    return HttpResponse.json(orderList);
  }),
  // 주문 상세(단일) 조회
  http.get('/orders/:id', ({ params }) => {
    const { id } = params;
    const orderDetail = orderList.find((order) => order.id === Number(id));

    return HttpResponse.json(orderDetail);
  }),
  // 주문 추가(주문하기)
  http.post('/orders', async ({ request }) => {
    const { orderDetails } = (await request.json()) as Pick<
      Order,
      'orderDetails'
    >;

    if (!orderDetails) return;

    const newOrderDetails = {
      id: generateUniqueId(),
      orderDetails,
    };

    // 새로운 주문 추가
    orderList.push(newOrderDetails);

    return HttpResponse.json(newOrderDetails, { status: 201 });
  }),
  // 주문 정보 설정(Sync용)
  http.post<PathParams, { data: Order[] }>('/order', async ({ request }) => {
    const { data: orders } = await request.json();

    orderList?.forEach((order) => {
      orderList.push(order);
    });
    return HttpResponse.json(orders, { status: 201 });
  }),
];
