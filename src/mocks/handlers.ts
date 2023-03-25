import { rest, RestRequest } from 'msw'
import z from 'zod'

import { API } from '@/config'
import { ProductSchema, ProductSchemaInfer } from '@/schemas'
import { Product } from '@/types'

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
  rest.get(`${API.PRODUCTS}`, (req, res, ctx) => {
    const searchParams = new URLSearchParams(req.url.search)
    const page = searchParams.get('page') as string
    const perPage = searchParams.get('perPage') as string
    const startIndex = (parseInt(page) - 1) * parseInt(perPage)
    const endIndex = startIndex + parseInt(perPage)

    try {
      const validatedProducts = products.map((product) => schema.parse(product))
      const productList = validatedProducts.slice(startIndex, endIndex)
      const totalPage = Math.ceil(products.length / parseInt(perPage))
      return res(ctx.status(200), ctx.json({ productList, totalPage }))
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

const createCart = (schema: z.ZodTypeAny) =>
  rest.post(`${API.CARTS}`, async (req: RestRequest<{ cart: ProductSchemaInfer }>, res, ctx) => {
    const { cart } = await req.json()
    try {
      const validatedCart = schema.parse(cart)
      carts.push(validatedCart)
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

const deleteCartItem = (schema: z.ZodTypeAny) =>
  rest.delete(`${API.CARTS}/:id`, (req, res, ctx) => {
    const { id } = req.params
    const cartIndex = carts.findIndex((cart) => cart.id === Number(id))

    if (cartIndex !== -1) {
      const cartItem = carts[cartIndex]

      try {
        const validatedCartItem = schema.parse(cartItem)
        carts.splice(cartIndex, 1)
        return res(ctx.status(200), ctx.json(validatedCartItem))
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

const deleteCartItems = (schema: z.ZodTypeAny) =>
  rest.delete(`${API.CARTS}`, async (req: RestRequest<{ ids: number[] }>, res, ctx) => {
    const { ids } = await req.json()

    console.log('ids', ids)

    try {
      const validatedCartItems = ids.map((id: number) => {
        const cartItem = carts.find((cart) => cart.id === id)
        if (!cartItem) throw new Error(`Cart item with id ${id} not found`)
        return schema.parse(cartItem)
      })

      validatedCartItems.forEach((cartItem: Product) => {
        const cartIndex = carts.findIndex((cart) => cart.id === cartItem.id)
        carts.splice(cartIndex, 1)
      })

      return res(ctx.status(200), ctx.json(validatedCartItems))
    } catch (error) {
      if (error instanceof Error) {
        return res(ctx.status(400), ctx.json({ message: error.message }))
      } else {
        return res(ctx.status(400), ctx.json({ message: String(error) }))
      }
    }
  })

export const handlers = [
  getProduct(products, ProductSchema),
  getProducts(products, ProductSchema),
  createProduct(ProductSchema),
  createCart(ProductSchema),
  getCarts(carts, ProductSchema),
  getCart(carts, ProductSchema),
  deleteCartItem(ProductSchema),
  deleteCartItems(ProductSchema),
]
