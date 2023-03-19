import { rest } from 'msw'

const PRODUCTS = [
  {
    id: '1',
    price: 10000,
    name: '치킨',
    imageUrl: 'http://example.com/chicken.jpg',
  },
  {
    id: '2',
    price: 20000,
    name: '피자',
    imageUrl: 'http://example.com/pizza.jpg',
  },
]

export const productsHandler = [
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PRODUCTS))
  }),
  rest.post('/products', async (req, res, ctx) => {
    const product = await req.json()
    const currentProduct = { ...product, id: PRODUCTS.length + 1 }
    PRODUCTS.push(currentProduct)

    return res(ctx.status(201), ctx.json(currentProduct))
  }),
  rest.get('/products/:productId', (req, res, ctx) => {
    const { productId } = req.params
    const product = PRODUCTS.find((product) => product.id === productId)
    return res(
      ctx.status(200),
      ctx.json(product || { message: 'product not found' }),
    )
  }),
  rest.delete('/products/:productId', (req, res, ctx) => {
    const { productId } = req.params
    const productIndex = PRODUCTS.findIndex(
      (product) => product.id === productId,
    )

    PRODUCTS.splice(productIndex, 1)

    return res(
      ctx.json({
        message: 'Delete successfully',
      }),
    )
  }),
]
