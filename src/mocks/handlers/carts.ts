import { http, delay, HttpResponse, PathParams } from 'msw';
import { Product } from '../../types';
import { carts } from './data';

export const handlers = [
  http.all('*', async () => await delay()),

  http.get('/carts', () => {
    return HttpResponse.json(Array.from(carts.values()));
  }),

  http.post<PathParams, { product: Product }>('/carts', async ({ request }) => {
    const { product } = await request.json();
    const { price, name, imageUrl } = product;

    if (
      !Number.isInteger(price) ||
      typeof name !== 'string' ||
      typeof imageUrl !== 'string'
    ) {
      return new HttpResponse('bad request', { status: 400 });
    } else {
      const id = new Date().getTime();
      carts.set(id, { id, product });
      return HttpResponse.json({ id, product });
    }
  }),

  http.delete<PathParams>('/carts/:id', async ({ params }) => {
    const { id: productId } = params;
    const cartItems = Array.from(carts.values());

    const cartItem = cartItems.filter(
      (cartItem) => cartItem.product.id === Number(productId)
    );

    if (!cartItem) {
      return new HttpResponse('cart item not found', { status: 404 });
    }

    cartItem.forEach((cartItem) => {
      carts.delete(cartItem.id);
    });
    return new HttpResponse('delete success', { status: 200 });
  }),

  http.delete<PathParams, { ids: Product['id'][] }>(
    '/carts',
    async ({ request }) => {
      const { ids } = await request.json();
      const cartItems = Array.from(carts.values());

      for (const id of ids) {
        const cartItem = cartItems.filter(
          ({ product }) => product.id === Number(id)
        );

        if (!cartItem) {
          return new HttpResponse('cart item not found', { status: 404 });
        }

        cartItem.forEach((cartItem) => {
          carts.delete(cartItem.id);
        });
      }

      return new HttpResponse('delete success', { status: 200 });
    }
  ),
];
