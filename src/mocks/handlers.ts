import { http, HttpResponse } from 'msw';
import { products } from '../../db.json';

export const handlers = [
  http.get('/products', () => {
    return HttpResponse.json(products);
  }),
  http.post('/postsd', () => {
    console.log('Captured a "POST /posts" request');
  }),
];
