// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'

import { PRODUCT_LIST } from './state'

// test msw
// const todos = ['공부하기', '넥스트스텝', '점진적과부하']

// export const handlers = [
//   // 할일 목록
//   rest.get('/todos', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(todos))
//   }),

//   // 할일 추가
//   rest.post('/todos', (req: any, res, ctx) => {
//     todos.push(req.body)
//     return res(ctx.status(201))
//   }),
// ]

export const handlers = [
  // 제품 목록
  rest.get('/product-list', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PRODUCT_LIST))
  }),

  // 제품 추가
  rest.post('/product-list', (req: any, res, ctx) => {
    PRODUCT_LIST.push(req.body)
    return res(ctx.status(201))
  }),
]
