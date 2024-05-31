import { delay, http, HttpResponse } from 'msw';
import { products } from './data';

export const handlers = [
  http.all('*', async () => await delay()),

  http.get('/products', ({ request }) => {
    const url = new URL(request.url);

    const size = Number(url.searchParams.get('size'));
    const page = Number(url.searchParams.get('page'));
    const totalCount = products.size;
    const totalPages = Math.round(totalCount / size);

    return HttpResponse.json({
      items: Array.from(products.values()).slice(
        page * size,
        (page + 1) * size
      ),
      pageNumber: page,
      pageSize: size,
      totalPages,
      totalCount,
      isLastPage: totalPages <= page,
      isFirstPage: page === 0,
    });
  }),

  http.get('/products/:productId', async ({ params }) => {
    const { productId } = params;

    const product = products.get(Number(productId));

    if (!product) return new HttpResponse('Product not found', { status: 404 });

    return HttpResponse.json(product);
  }),
];
