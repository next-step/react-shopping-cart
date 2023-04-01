import { rest } from 'msw'
import { CartItemType } from '../components/CartItem/CartItem'
import MOCK_DATA from '../../shared/mocks/db.json'
const { carts } = MOCK_DATA

export const cartsHandlers = [
  rest.get('/api/carts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(carts))
  }),
  rest.post('/api/cart', async (req, res, ctx) => {
    const { params: cartItem } = await req.json()
    const currentCartItem: CartItemType = {
      id: carts.length + 1,
      product: cartItem,
    }
    carts.push(currentCartItem)

    return res(ctx.status(200), ctx.json(currentCartItem))
  }),
  rest.delete('/api/cart/:cardId', (req, res, ctx) => {
    const { cardId } = req.params
    const carttIndex = carts.findIndex((cart) => cart.id.toString() === cardId)

    carts.splice(carttIndex, 1)

    return res(
      ctx.json({
        message: 'Delete successfully',
      }),
    )
  }),
]
