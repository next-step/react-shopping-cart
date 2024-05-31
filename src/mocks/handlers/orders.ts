import { http, delay, HttpResponse, PathParams } from 'msw';
import { Order } from '../../types';
import { orders, carts } from './data';

export const handlers = [
  http.all('*', async () => await delay()),

  http.get('/orders', () => {
    return HttpResponse.json(Array.from(orders.values()));
  }),

  http.post<PathParams, Order['orderDetails']>(
    '/orders',
    async ({ request }) => {
      const products = await request.json();

      const id = new Date().getTime();

      for (const product of products) {
        const { quantity = 1, price, name, imageUrl } = product;

        if (
          !Number.isInteger(quantity) ||
          quantity < 1 ||
          !Number.isInteger(price) ||
          typeof name !== 'string' ||
          typeof imageUrl !== 'string'
        ) {
          return new HttpResponse('error occurred on create order', {
            status: 400,
          });
        }
      }
      orders.set(id, { id, orderDetails: products });

      const productIds = products.map((product) => product.id);
      const newCartItem = Array.from(carts.values()).filter(
        (cartItem) => !productIds.includes(cartItem.product.id)
      );

      carts.clear();
      newCartItem.forEach((cartItem) => {
        carts.set(cartItem.id, cartItem);
      });

      return HttpResponse.json({
        id,
        orderDetails: products,
      });
    }
  ),

  http.get('/orders/:orderId', ({ params }) => {
    const { orderId } = params;
    const order = orders.get(Number(orderId));

    if (!order) return new HttpResponse('Order not found', { status: 404 });

    return HttpResponse.json(order);
  }),
];
