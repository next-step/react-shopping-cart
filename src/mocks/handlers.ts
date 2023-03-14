import { rest, RestRequest } from 'msw'

import { ProductType } from '@/types'

import { products, carts } from './data'

export const handlers = [
  // 상품목록
  rest.get(`${process.env.REACT_APP_API_URL}/products`, (_: RestRequest, res, ctx) => {
    return res(ctx.status(200), ctx.json(products))
  }),

  // 상품목록 추가
  rest.post(
    `${process.env.REACT_APP_API_URL}/products`,
    async (req: RestRequest<{ product: ProductType }>, res, ctx) => {
      const { product } = await req.json()
      products.push(product)
      return res(ctx.status(200))
    },
  ),

  // 상품 하나 가져오기
  rest.get(`${process.env.REACT_APP_API_URL}/products/:id`, (req, res, ctx) => {
    const { id } = req.params
    const product = products.find((p) => p.id === Number(id))

    if (product) {
      return res(ctx.status(200), ctx.json(product))
    } else {
      return res(ctx.status(404))
    }
  }),

  // 장바구니 목록
  rest.get(`${process.env.REACT_APP_API_URL}/carts`, (_: RestRequest, res, ctx) => {
    return res(ctx.status(200), ctx.json(carts))
  }),

  // 장바구니 추가
  rest.post(`${process.env.REACT_APP_API_URL}/carts`, async (req: RestRequest<{ product: ProductType }>, res, ctx) => {
    const { product } = await req.json()
    carts.push(product)
    return res(
      ctx.status(200),
      ctx.json({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
      }),
    )
  }),
]
