import { http, HttpResponse } from 'msw';
import { products } from '../../db.json';

export const handlers = [
  http.get(`${import.meta.env.VITE_NEXTSTEP_API_URL}/products`, () => {
    return HttpResponse.json(products);
  }),
  http.post(`${import.meta.env.VITE_NEXTSTEP_API_URL}/cart/*`, () => {
    console.log('Captured a "POST /cart/*" request');
  }),
  http.delete(`${import.meta.env.VITE_NEXTSTEP_API_URL}/cart/*`, () => {
    console.log('Captured a "DELETE /cart/*" request');
  }),
];
