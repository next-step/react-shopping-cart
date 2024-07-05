import { http, HttpResponse, PathParams } from 'msw';
import { MOCK_CARTS_DATA } from '../data/carts';
import { CartProduct } from '@/types/cart';
import { generateUniqueId } from '@/utils/uniqueId';

let cartList = MOCK_CARTS_DATA;

export const cartsHandlers = [
  http.get('/carts', () => {
    return HttpResponse.json(cartList);
  }),

  http.post('/carts', async ({ request }) => {
    const { product } = (await request.json()) as Pick<CartProduct, 'product'>;

    const newCartProduct = {
      id: generateUniqueId(),
      product,
    };

    cartList.push(newCartProduct);

    return HttpResponse.json(newCartProduct, { status: 201 });
  }),
  // 장바구니 정보 설정(Sync용)
  http.post<PathParams, { data: CartProduct[] }>(
    '/cart',
    async ({ request }) => {
      const { data: products } = await request.json();

      products?.forEach(({ id, product, quantity }) => {
        cartList.push({ id, product, quantity });
      });

      return HttpResponse.json(products, { status: 201 });
    }
  ),

  http.delete('/carts/product/:id', ({ params }) => {
    const { id: targetProductId } = params;
    const targetCart = cartList.find(
      (cart) => cart.product.id === Number(targetProductId)
    );
    if (!targetCart) {
      return new HttpResponse(null, { status: 400 });
    }

    cartList = [...cartList.filter((cart) => cart.id !== targetCart.id)];

    return new HttpResponse(null, { status: 204 });
  }),

  http.delete('/carts/products', async ({ request }) => {
    const requestDeleteIdList = (await request.json()) as Array<
      CartProduct['product']['id']
    >;

    cartList = [
      ...cartList.filter(
        (cart) => !requestDeleteIdList?.includes(cart.product.id)
      ),
    ];
    return new HttpResponse(null, { status: 204 });
  }),
];
