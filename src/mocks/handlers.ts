import { rest, RestRequest } from 'msw'
import z from 'zod'

import { API } from '@/config'
import { ProductSchema, ProductSchemaInfer } from '@/schemas'

import { products, carts } from './data'

const getProduct = (products: ProductSchemaInfer[], schema: z.ZodTypeAny) =>
  rest.get(`${API.PRODUCTS}/:id`, (req, res, ctx) => {
    const { id } = req.params
    const product = products.find((p) => p.id === Number(id))

    if (product) {
      try {
        const validatedProduct = schema.parse(product)
        return res(ctx.status(200), ctx.json(validatedProduct))
      } catch (error) {
        if (error instanceof Error) {
          return res(ctx.status(400), ctx.json({ message: error.message }))
        } else {
          return res(ctx.status(400), ctx.json({ message: String(error) }))
        }
      }
    } else {
      return res(ctx.status(404))
    }
  })

const getProducts = (products: ProductSchemaInfer[], schema: z.ZodTypeAny) =>
  rest.get(`${API.PRODUCTS}`, (_: RestRequest, res, ctx) => {
    try {
      const validatedProducts = products.map((product) => schema.parse(product))
      return res(ctx.status(200), ctx.json(validatedProducts))
    } catch (error) {
      if (error instanceof Error) {
        return res(ctx.status(400), ctx.json({ message: error.message }))
      } else {
        return res(ctx.status(400), ctx.json({ message: String(error) }))
      }
    }
  })

const createProduct = (schema: z.ZodTypeAny) =>
  rest.post(`${API.PRODUCTS}`, async (req: RestRequest<{ product: ProductSchemaInfer }>, res, ctx) => {
    const { product } = await req.json()
    try {
      const validatedProduct = schema.parse(product)
      products.push(validatedProduct)
      return res(ctx.status(201))
    } catch (error) {
      if (error instanceof Error) {
        return res(ctx.status(400), ctx.json({ message: error.message }))
      } else {
        return res(ctx.status(400), ctx.json({ message: String(error) }))
      }
    }
  })

const getCarts = (carts: ProductSchemaInfer[], schema: z.ZodTypeAny) =>
  rest.get(`${API.CARTS}`, (_: RestRequest, res, ctx) => {
    try {
      const validatedCarts = carts.map((cart) => schema.parse(cart))
      return res(ctx.status(200), ctx.json(validatedCarts))
    } catch (error) {
      if (error instanceof Error) {
        return res(ctx.status(400), ctx.json({ message: error.message }))
      } else {
        return res(ctx.status(400), ctx.json({ message: String(error) }))
      }
    }
  })

const getCart = (carts: ProductSchemaInfer[], schema: z.ZodTypeAny) =>
  rest.get(`${API.CARTS}/:id`, async (req: RestRequest<{ product: ProductSchemaInfer }>, res, ctx) => {
    const { id } = req.params
    const cart = carts.find((p) => p.id === Number(id))

    if (cart) {
      try {
        const validatedCart = schema.parse(cart)
        return res(ctx.status(200), ctx.json(validatedCart))
      } catch (error) {
        if (error instanceof Error) {
          return res(ctx.status(400), ctx.json({ message: error.message }))
        } else {
          return res(ctx.status(400), ctx.json({ message: String(error) }))
        }
      }
    } else {
      return res(ctx.status(404))
    }
  })

export const handlers = [
  getProduct(products, ProductSchema),
  getProducts(products, ProductSchema),
  createProduct(ProductSchema),
  getCarts(carts, ProductSchema),
  getCart(carts, ProductSchema),
]
