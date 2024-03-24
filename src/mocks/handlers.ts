import { http, HttpResponse } from 'msw'
import list from './db.json'

export const handlers = [
  http.get('/products', () => HttpResponse.json(list.products)),
  http.get('/orders', () => HttpResponse.json(list.orders)),
  http.get('/products/:id', ({ params }) => {
    const { id } = params
    const filtered = list.products.filter((item, _) => item.id === Number(id))

    return HttpResponse.json(filtered)
  }),
  http.get('/carts', () => HttpResponse.json(list.carts)),
]
