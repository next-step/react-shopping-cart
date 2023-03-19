import { rest } from 'msw'

const CARTS = [
  {
    id: '1',
    price: 2500,
    name: '연필',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1670958553973-58e2ef388f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: '2',
    price: 200000,
    name: '갤럭시 워치',
    imageUrl:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
  },
  {
    id: '3',
    price: 100000,
    name: '캠핑 가방',
    imageUrl:
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80',
  },
]

export const cartsHandlers = [
  rest.get('/carts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CARTS))
  }),
  rest.post('/carts', async (req, res, ctx) => {
    const { params: cartItem } = await req.json()
    const currentCartItem = { ...cartItem, id: CARTS.length + 1 }
    CARTS.push(currentCartItem)

    return res(ctx.status(200), ctx.json(currentCartItem))
  }),
  rest.delete('/carts/:cardId', (req, res, ctx) => {
    const { cardId } = req.params
    const carttIndex = CARTS.findIndex((cart) => cart.id === cardId)

    CARTS.splice(carttIndex, 1)

    return res(
      ctx.json({
        message: 'Delete successfully',
      }),
    )
  }),
]
