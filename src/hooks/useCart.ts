import { useContext, useMemo } from 'react'
import { CartContext, CartItem, Order, UpdateCartContext } from '../context/cartsContext'

type Action =
  | 'ADD_CART_ITEM'
  | 'REMOVE_CART_ITEM'
  | 'ADD_ORDER_ITEM'
  | 'UPDATE_ITEM_QUANTITY'
  | 'ADD_ORDER_HISTORY'
  | 'ALL_CHECK_ITEM'
  | 'ALL_DELETE_ITEM'

const useCart = () => {
  const orderContext = useContext(CartContext)
  const updateCartContext = useContext(UpdateCartContext)

  const actions = (action: Action, state?: Order['orderDetails']) => {
    switch (action) {
      case 'ADD_CART_ITEM':
        return state && updateCartContext({ ...orderContext, cart: [...orderContext.cart, ...state] })

      case 'ADD_ORDER_ITEM':
        return updateCartContext({
          ...orderContext,
          order: orderContext.cart.filter((item) => item.isChecked),
        })
      case 'REMOVE_CART_ITEM':
        return updateCartContext({
          ...orderContext,
          cart: orderContext.cart.filter((item) => !item.isChecked),
        })
      case 'UPDATE_ITEM_QUANTITY':
        return (
          state &&
          updateCartContext({
            ...orderContext,
            cart: orderContext.cart.map((item) => {
              if (item.id === state[0].id) return { ...item, quantity: state[0].quantity }
              return item
            }),
          })
        )
      case 'ADD_ORDER_HISTORY':
        return (
          state &&
          updateCartContext({
            ...orderContext,
            orderHistory: [
              ...orderContext.orderHistory,
              { id: orderContext.orderHistory.length + 1, orderDetails: state },
            ],
          })
        )
      case 'ALL_CHECK_ITEM':
        return (
          state &&
          updateCartContext({
            ...orderContext,
            cart: state,
          })
        )
      case 'ALL_DELETE_ITEM':
        return (
          state &&
          updateCartContext({
            ...orderContext,
            cart: [],
          })
        )
      default:
        throw new Error('Unhandled action type') //에러를 던질필요가 있나?
    }
  }
  return {
    orderContext,
    actions,
  }
}

export default useCart
