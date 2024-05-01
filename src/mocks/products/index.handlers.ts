import { cartHandlers } from './cart.handlers'
import { productsHandlers as productsListHandlers } from './products.handlers'

export const productsHandlers = [...cartHandlers, ...productsListHandlers]
