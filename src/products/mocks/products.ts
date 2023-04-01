import { randomInt } from 'crypto'
import { rest } from 'msw'

import MOCK_DATA from '../../shared/mocks/db.json'
const { products } = MOCK_DATA

export const productsHandler = [
  rest.get('/api/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products))
  }),
  rest.post('/api/product', async (req, res, ctx) => {
    const product = await req.json()
    const currentProduct = { ...product, id: randomInt(10000000) }
    products.push(currentProduct)

    return res(ctx.status(201), ctx.json(currentProduct))
  }),
  rest.get('/api/product/:productId', (req, res, ctx) => {
    const { productId } = req.params
    const product = products.find(
      (product) => product.id.toString() === productId,
    )
    return res(
      ctx.status(200),
      ctx.json(product || { message: 'product not found' }),
    )
  }),
  rest.delete('/api/product/:productId', (req, res, ctx) => {
    const { productId } = req.params
    const productIndex = products.findIndex(
      (product) => product.id.toString() === productId,
    )

    products.splice(productIndex, 1)

    return res(
      ctx.json({
        message: 'Delete successfully',
      }),
    )
  }),
]
