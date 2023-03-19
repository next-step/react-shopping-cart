import { rest, RestRequest } from 'msw'

import { API } from '@/config'
import { Product } from '@/types'

import { products, carts } from './data'

const getProduct = (products: Product[]) =>
  rest.get(`${API.PRODUCTS}/:id`, (req, res, ctx) => {
    const { id } = req.params
    const product = products.find((p) => p.id === Number(id))

    if (product) {
      return res(ctx.status(200), ctx.json(product))
    } else {
      return res(ctx.status(404))
    }
  })

const getProducts = (products: Product[]) =>
  rest.get(`${API.PRODUCTS}`, (_: RestRequest, res, ctx) => {
    return res(ctx.status(200), ctx.json(products))
  })

const createProduct = () =>
  rest.post(`${API.PRODUCTS}`, async (req: RestRequest<{ product: Product }>, res, ctx) => {
    const { product } = await req.json()
    products.push(product)
    return res(ctx.status(200))
  })

const getCarts = (carts: Product[]) =>
  rest.get(`${API.CARTS}`, (_: RestRequest, res, ctx) => {
    return res(ctx.status(200), ctx.json(carts))
  })

const getCart = (carts: Product[]) =>
  rest.post(`${API.CARTS}`, async (req: RestRequest<{ product: Product }>, res, ctx) => {
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
  })

export const handlers = [getProduct(products), getProducts(products), createProduct(), getCarts(carts), getCart(carts)]
