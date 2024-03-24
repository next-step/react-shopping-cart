import { http, HttpResponse } from 'msw'
import list from './db.json'

export const handlers = [http.get('/products', () => HttpResponse.json(list))]
